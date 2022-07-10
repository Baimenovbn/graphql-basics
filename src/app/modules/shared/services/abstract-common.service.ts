import { RESTDataSource } from 'apollo-datasource-rest';
import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';

import { EMicroservices } from '../../../constants/enums/microservices.enum';
import { URLResolver } from '../../../rests';
import { ICommonResponse } from '../interfaces/common-response.interface';

export abstract class CommonService<Model, CreateModel extends object> extends RESTDataSource {
  constructor(microservice: EMicroservices) {
    super();
    this.baseURL = URLResolver(microservice);
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getAll(): Promise<ICommonResponse<Model>> {
    return this.get('');
  }

  getById(id: string) {
    return this.get(id);
  }

  create(createData: CreateModel) {
    const body = {...createData} as unknown as Body;
    return this.post('', body);
  }

  remove(id: string) {
    return this.delete(id);
  }

  update(id: string, updateData: Partial<Model>) {
    return this.put(id, updateData)
  }
}
