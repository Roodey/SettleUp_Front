import Ember from 'ember';

export default Ember.Controller.extend({
  nameIsFilled: Ember.computed.notEmpty('model.name'),
  descriptionIsFilled: Ember.computed.notEmpty('model.description'),
  isValid: Ember.computed.and('nameIsFilled', 'descriptionIsFilled'),
  isSubmittable: Ember.computed.not('isValid')
});
