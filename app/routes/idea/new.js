import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({
model(){
    const session = get(this,'session');
    return this.store.createRecord('idea',{
      author:{
        email: session.content.currentUser.email,
        displayName: session.content.currentUser.displayName
      }
    });

  },

  actions:{
    submitIdea(newIdea){
      newIdea.save().then(()=> {
        newIdea.rollbackAttributes();
      }).catch(error => {
        console.log(error);
      });
      //this.transitionTo('index');
    }
  },
  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
});
