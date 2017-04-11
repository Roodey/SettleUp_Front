import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('idea')/*.then(ideas => ideas.sortBy('created'))*/;
  },
});
