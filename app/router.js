import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('idea', function() {
    this.route('index',{path:'/:idea_id'});
    this.route('new');
  });

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('app', function() {});
});

export default Router;
