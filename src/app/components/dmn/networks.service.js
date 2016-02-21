export class NetworksService {
  constructor(Restangular) {
    'ngInject';

    return Restangular.service.call(Restangular, 'networks');
  }
}
