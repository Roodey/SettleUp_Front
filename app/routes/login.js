import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({



  actions:{
    login(providerName){
        get(this,'session').open('firebase', {provider: providerName}).then(data => {
          console.log(data);
//Find out if this is a returning user

          const user = this.store.queryRecord('user',{
            email:data.currentUser.email,
          });
          console.info(user);

//If the user was not found, create him
//         if(userCheck === undefined){
//           console.log('Creating new user');
//           const newUser = this.store.createRecord('user',{
//             email: data.currentUser.email,
//             displayName: data.currentUser.displayName
//           });
//           newUser.save();
//         }
////Delete this later.
//         else{
//           console.log("Welcome returning user!");
//         }

//Once login has been completed, transition to the index route.
          this.transitionTo('index');
        });

          },
    logout(){
      get(this,'session').close();
    }
  }

});
