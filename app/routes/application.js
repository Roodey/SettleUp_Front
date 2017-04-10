import Ember from 'ember';
const {get} = Ember;
export default Ember.Route.extend({
  beforeModel(){
    return get(this,'session').fetch().catch(()=>{
      this.transitionTo('login');
    });
  },

  actions:{
    logout(){
      get(this,'session').close();
      this.transitionTo('login');
    },
    willTransition(){
      const session = get(this,'session');
      console.log(session.content.isAuthenticated);
      if(session.content.isAuthenticated === true){
        this.controller.set('model',{
          email: session.content.currentUser.email,
          displayName:session.content.currentUser.displayName,
          provider:session.content.provider
        });

      }
      else{
        this.transitionTo('login');
      }

    }
  }

  });
