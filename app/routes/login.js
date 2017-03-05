import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({

  actions:{
    login(providerName){
      console.log(providerName);
      get(this,'session').open('firebase', {provider: providerName}).then(data => {
        //TODO: SEND THIS DATA TO THE DATABASE SO LOGIN CAN BE STORED
        console.log(data);
        //var user = this.store.findRecord('user',1);

        this.transitionTo('index');
      });
    },
    logout(){
      get(this,'session').close();
    }
  }

});
