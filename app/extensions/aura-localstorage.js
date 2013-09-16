define({
  
  name: "Backbone LocalStorage",

  require: {
    paths: {
      'backbone.localStorage' : 'bower_components/backbone.localStorage/backbone.localStorage'
    }
  },

  initialize: function(app) {
    app.sandbox.data.Store = require('backbone').LocalStorage;
  }

});