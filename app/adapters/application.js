import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'https://sheltered-journey-27877.herokuapp.com',
  namespace:'api',
  coalesceFindRequests:true
});
