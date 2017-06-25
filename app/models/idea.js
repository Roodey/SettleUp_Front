
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
//  contributers: DS.hasMany('user'),
  description: DS.attr('string'),
  created: DS.attr('string'),
});
