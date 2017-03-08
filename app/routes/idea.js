import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('idea');
  },

  actions:{
    submitIdea(newIdea){
      newIdea.save().then(()=> {
        newIdea.rollbackAttributes();
        this.transitionTo('index');
      });
    }
  },
  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
});
