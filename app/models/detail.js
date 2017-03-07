import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  link: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  idea: DS.belongsTo('idea')
});
