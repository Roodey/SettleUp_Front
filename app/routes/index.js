import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model(){
    return this.store.findAll('idea')/*.then(ideas => ideas.sortBy('created'))*/;
  },
});
