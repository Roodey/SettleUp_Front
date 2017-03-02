import Ember from 'ember';
const {get} = Ember;
export default Ember.Route.extend({
  beforeModel(){
    return get(this,'session').fetch().catch(function(){});
  },
  //TODO: ADD A MODEL HOOK WHEN NEEDED

  actions:{
    login(){
      get(this,'session').open('firebase', {provider: 'twitter'}).then(data => console.log(data));
    },
    logout(){
      get(this,'session').close();
    }
  }
});
