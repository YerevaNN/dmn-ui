export class GithubContributorService {
  constructor ($q) {
    'ngInject';

    this.$q = $q;
  }

  getContributors() {
    return this.$q.resolve([{
      login: 'Hrant'
    }, {
      login: 'Hrayr'
    }, {
      login: 'Karen'
    }, {
      login: 'Tigran'
    }, {
      login: 'Narek'
    }, {
      login: 'Mikael'
    }]);
  }
}
