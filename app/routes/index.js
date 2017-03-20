import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  model(){
    var ideas = this.store.findAll('idea').then(response => console.log(response)).catch(error =>{
      console.error('there was an error');
      console.log(error);
    });
    console.log(ideas);
    return ideas;

  },
});
