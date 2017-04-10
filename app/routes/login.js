import Ember from 'ember';
//import Moment from 'moment'; decide whether or not to use this date object here.
const {get} = Ember;

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },



  actions:{
    login(providerName){
      get(this,'session').open('firebase', {provider: providerName}).then(data => {
        console.log(data);
        this.store.createRecord('user',{
          email: data.currentUser.email,
          displayName: data.currentUser.displayName,
          provider:data.providerName
        }).save().catch(error=>console.error(error));
      }).catch(error => console.error(error));

      this.transitionTo('index');
    },

    logout(){
      get(this,'session').close();
    }
  }

});
