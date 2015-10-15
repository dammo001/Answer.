(function(root) {
  'use strict';

  var _user = [], CHANGE_EVENT = "CHANGE";


  root.UserStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _user.slice()[0];
    },

    addChangeHandler: function(handler){
      root.UserStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.UserStore.removeListener(CHANGE_EVENT, handler);
    },

    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

      case UserConstants.USER_RECEIVED:
        _user = [action.user]; 
        root.UserStore.emit(CHANGE_EVENT);
        break;
    }})
  });

}(this));