import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({

  actions:{
    login(providerName){
      console.log(providerName);
        get(this,'session').open('firebase', {provider: providerName}).then(data => {
          //TODO: SEND THIS DATA TO THE DATABASE SO LOGIN CAN BE STORED
          console.log(data);
//TODO: IMPLEMENT QUERYRECORD SO WE CAN SEE IF THEY HAVE MADE AN ACCOUNT YET.
          var user = this.store.queryRecord('user',data.currentUser.email);
          console.log(user);

          //this.transitionTo('index');
        });

          },
    logout(){
      get(this,'session').close();
    }
  }

});
