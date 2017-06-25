import Ember from 'ember';
const {get} = Ember;
import moment from 'moment';

export default Ember.Route.extend({
model(){
    const session = get(this,'session');
    return this.store.createRecord('idea',{
      title: '',
      description: '',
      created: moment().format('L').toString()
    });

  },

  actions:{
    submitIdea(newIdea){
      console.log(newIdea);
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
