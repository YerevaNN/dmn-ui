/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {GithubContributorService} from '../app/components/githubContributor/githubContributor.service';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {MalarkeyDirective} from '../app/components/malarkey/malarkey.directive';
import {DmnController} from '../app/components/dmn/dmn.controller';
import {NetworksService} from '../app/components/dmn/networks.service';
import {VocabDirective} from '../app/components/dmn/vocab.directive';

angular.module('ui', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr', 'angular-loading-bar'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .controller('MainController', MainController)
  .controller('DmnController', DmnController)
  .service('Networks', NetworksService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('vocab', VocabDirective);
