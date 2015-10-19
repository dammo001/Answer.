(function(root) {
  'use strict';

  var _tags = [], CHANGE_EVENT = "CHANGE";


  root.TagStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _tags.slice()[0];
    },

    addChangeHandler: function(handler){
      root.TagStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.TagStore.removeListener(CHANGE_EVENT, handler);
    },

    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

      case TagConstants.TAGS_RECEIVED:
        _tags = [action.tags]; 
        root.TagStore.emit(CHANGE_EVENT);
        break;

    }})
  });

}(this));