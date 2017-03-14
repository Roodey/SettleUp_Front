import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model(){
    var ideas = this.store.findAll('idea');
    console.log(ideas);
    return ideas;

  },
});
