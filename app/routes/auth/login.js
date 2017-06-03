import Ember from 'ember';

const {Route,inject} = Ember;

export default Route.extend({
  session:inject.service(),

  model(){
    return{
      email: '',
      password: ''
    };
  },

  actions:{
    doLogin(model){
      const user = model;
      this.get('session')
        .authenticate(
          'authenticator:application', user.email, user.password
        ).then( () => console.log('Successfully logged in!'))
         .catch(error => console.error(error));
    }
  }
});
