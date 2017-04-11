import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params);
    return this.store.findRecord('idea',params.idea_id);
  },

  actions:{
    newDetail(){

    }
  },
});
