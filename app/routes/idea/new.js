import Ember from 'ember';
import moment from 'moment';
const {get} = Ember;

export default Ember.Route.extend({
  beforeModel(){
    const session = get(this,'session');
    if(!session.content.isAuthenticated){
      this.transitionTo('login');
    }
  },
model(){
    return this.store.createRecord('idea');
  },

  actions:{
    submitIdea(newIdea){
      newIdea.created = moment().format();
      console.log(newIdea.created);
      newIdea.save().then(()=> {
        newIdea.rollbackAttributes();
      }).catch(error => {
        console.log(error);
      });
      this.transitionTo('index');
    }
  },
  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
});
