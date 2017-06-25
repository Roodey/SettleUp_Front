import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  authentication: DS.belongsTo('user'),
  ideas: DS.hasMany('idea')
});
