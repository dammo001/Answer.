(function(root) {
  'use strict';

  var _questions = [], CHANGE_EVENT = "CHANGE";


  root.QuestionStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _questions.slice();
    },

    addChangeHandler: function(handler){
      root.QuestionStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.QuestionStore.removeListener(CHANGE_EVENT, handler);
    },

    changed: function() {
      root.QuestionStore.emit(CHANGE_EVENT);
    },

    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

     case QuestionConstants.RESET_QUESTIONS:
        _questions = action.questions;
        root.QuestionStore.changed(); 
        break; 
    }})
  });

  


}(this));
