import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({

  actions:{
    login(providerName){
        get(this,'session').open('firebase', {provider: providerName}).then(data => {
          console.log(data);
          const email = data.currentUser.email;
          let userCheck;
//Find out if this is a returning user
          this.store.query('user',{
            orderBy: 'email',
            equalTo: email
          }).then(foundUsers =>
            userCheck =  foundUsers.get('firstObject')
          ).then(user => userCheck = user);
          console.info(userCheck);

//If the user was not found, create him
          if(userCheck === undefined){
            console.log('Creating new user');
            const newUser = this.store.createRecord('user',{
              email: data.currentUser.email,
              displayName: data.currentUser.displayName
            });
            newUser.save();
          }
//Delete this later.
          else{
            console.log("Welcome returning user!");
          }

//Once login has been completed, transition to the index route.
          //this.transitionTo('index');
        });

          },
    logout(){
      get(this,'session').close();
    }
  }

});
