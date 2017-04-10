import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  displayName: DS.attr('string'),
  joinedDate: DS.attr('string'),
  provider: DS.attr('string')
});
