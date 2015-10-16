(function(root) {
  'use strict';

  var _search = [], CHANGE_EVENT = "CHANGE";


  root.searchStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _search.slice()[0];
    },

    addChangeHandler: function(handler){
      root.searchStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.searchStore.removeListener(CHANGE_EVENT, handler);
    },

    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

      case QuestionConstants.search_RECEIVED:
        _search = [action.search]; 
        root.searchStore.emit(CHANGE_EVENT);
        break;
    }})
  });

}(this));