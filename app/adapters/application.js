import WebApiAdapter from 'ember-web-api/adapters/web-api';

export default WebApiAdapter.extend({
  //host:'http://settleup.azurewebsites.net', //.NET WEP API
  //host:'http://localhost:1337', //SAILS
  namespace:'api'
});
