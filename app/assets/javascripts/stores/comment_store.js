(function(root) {
  'use strict';

  var _comments = [], CHANGE_EVENT = "CHANGE";


  root.CommentStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _comments.slice()[0];
    },

    addChangeHandler: function(handler){
      root.CommentStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.CommentStore.removeListener(CHANGE_EVENT, handler);
    },

    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

      case CommentConstants.COMMENT_ADDED:
        _comments.push(action.comment); 
        root.CommentStore.emit(CHANGE_EVENT);
        break;

    }})
  });

}(this));