import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },



  actions:{
    login(providerName){
        get(this,'session').open('firebase', {provider: providerName}).then(data => {
          console.log(data);
          let newUser = Model.user;
//Find out if this is a returning user
        newUser.save().then(response =>{
          console.log(response)
        }).catch(error => console.error(error));

//Once login has been completed, transition to the index route.
          this.transitionTo('index');
      });

    },

    logout(){
      get(this,'session').close();
    }
  }

});
