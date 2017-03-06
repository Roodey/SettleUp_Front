import Ember from 'ember';
const {get} = Ember;
export default Ember.Route.extend({
  beforeModel(){
    return get(this,'session').fetch().then(test => console.log(test)).catch(data =>{
      console.log(data);
      //this.transitionTo('login');

    });
  },
  //TODO: ADD A MODEL HOOK WHEN NEEDED

  actions:{
    logout(){
      get(this,'session').close();
      this.transitionTo('login');
    }
  }

  });
