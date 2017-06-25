import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('app', function() {
    this.route('index');


    this.route('idea', function() {
        this.route('index',{path:'/'});
        this.route('new');
      });
  });
});

export default Router;
