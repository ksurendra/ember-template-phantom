import EmberRouter from '@ember/routing/router';
import config from 'ember-template-phantom/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('generic');
  this.route('elements');
});
