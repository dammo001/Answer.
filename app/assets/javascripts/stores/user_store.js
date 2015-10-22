(function(root) {
  'use strict';

  var _user = [], CHANGE_EVENT = "CHANGE", TAG_EVENT = "TAG_EVENT";


  root.UserStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _user.slice()[0];
    },

    addChangeHandler: function(handler){
      root.UserStore.on(CHANGE_EVENT, handler);
    },

    addTagHandler: function(handler){
      root.UserStore.on(TAG_EVENT, handler);
    },

    removeTagHandler: function(handler){
      root.UserStore.removeListener(TAG_EVENT, handler); 
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

      case UserConstants.USER_UPDATED:
        _user = [action.user];
        root.UserStore.emit(CHANGE_EVENT);
        break; 

      case UserConstants.TAGS_UPDATED:
        _user[0].tags = action.tags;
        root.UserStore.emit(TAG_EVENT);
        break; 
    }})
  });

}(this));