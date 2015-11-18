(function(root) {
  'use strict';

  var _search = [], CHANGE_EVENT = "CHANGE", CLEAR_EVENT= "CLEAR";


  root.SearchStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _search.slice()[0];
    },

    addChangeHandler: function(handler){
      root.SearchStore.on(CHANGE_EVENT, handler);
    },

    addClearHandler: function(handler){
      root.SearchStore.on(CLEAR_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.SearchStore.removeListener(CHANGE_EVENT, handler);
    },

    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

      case SearchConstants.SEARCH_RECEIVED:
        _search = [action.questions]; 
        root.SearchStore.emit(CHANGE_EVENT);
        break;

      case SearchConstants.CLEAR_SEARCH:
        _search = [];
        root.SearchStore.emit(CLEAR_EVENT);
        break; 
    }})
  });

}(this));