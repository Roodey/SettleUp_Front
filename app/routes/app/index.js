import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let ideas = this.store.findAll('idea');
    console.log(`from the app/index page: ${ideas}`);
    return ideas;
  }
});
