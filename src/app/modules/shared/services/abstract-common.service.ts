import { RESTDataSource } from 'apollo-datasource-rest';

import { EMicroservices } from '../../../constants/enums/microservices.enum';
import { URLResolver } from '../../../rests';
import { ICommonResponse } from '../interfaces/common-response.interface';
import { IPaginatedRequest } from '../interfaces/PaginatedRequest';
import { toPlainObject } from '../helpers';
import { DEFAULT_PAGINATE_PARAMS } from '../../../constants';

export abstract class CommonService<Model, CreateModel extends object> extends RESTDataSource {
  constructor(microservice: EMicroservices) {
    super();
    this.baseURL = URLResolver(microservice);
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getAll(pagination: IPaginatedRequest): Promise<ICommonResponse<Model>> {
    const { limit, offset } = pagination || DEFAULT_PAGINATE_PARAMS;
    return this.get('', { limit, offset });
  }

  async getById(id: string) {
    try {
      return await this.get(id);
    } catch (e) {
      return null;
    }
  }

  create(createData: CreateModel) {
    return this.post('', toPlainObject(createData));
  }

  async remove(id: string) {
    try {
      const res = await this.delete<{ deletedCount: number, acknowledged: boolean}>(id);
      return res.acknowledged;
    } catch (e) {
      return false;
    }
  }

  update(id: string, updateData: Partial<Model>) {
    return this.put(id, toPlainObject(updateData))
  }
}
