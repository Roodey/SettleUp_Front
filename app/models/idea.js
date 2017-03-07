import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  created: DS.attr('date'),
  content: DS.hasMany('details'),

});
