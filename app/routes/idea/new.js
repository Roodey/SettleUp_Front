import Ember from 'ember';

export default Ember.Route.extend({
model(){
    return this.store.createRecord('idea');
  },

  actions:{
    submitIdea(newIdea){
      console.log(newIdea.get('id'));
      newIdea.save().then((responseIdea)=> {
        console.log(responseIdea.get('id'));
        newIdea.rollbackAttributes();
        this.transitionTo('index');
      });
    }
  },
  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
});
