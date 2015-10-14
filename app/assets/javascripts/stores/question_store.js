(function(root) {
  'use strict';

  var _questions = [], CHANGE_EVENT = "CHANGE";


  root.QuestionStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _questions.slice();
    },

    find: function(id){ 
      _questions.map(function(question){
        if (question.id === id){
          return question;
        } else{
          return -1; 
        }
      });
    },

    addChangeHandler: function(handler){
      root.QuestionStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.QuestionStore.removeListener(CHANGE_EVENT, handler);
    },


    DispatcherId: AppDispatcher.register(function(action){
    switch(action.actionType){

      case QuestionConstants.RESET_QUESTIONS:
        _questions = action.questions;
        root.QuestionStore.emit(CHANGE_EVENT);
        break; 

      case QuestionConstants.QUESTION_RECEIVED:
        _questions = action.question; 
        root.QuestionStore.emit(CHANGE_EVENT);
        break;

      case QuestionConstants.ADD_QUESTION:
        _questions.push(action.question);
        root.QuestionStore.emit(CHANGE_EVENT);
        break; 
    }})
  });

  


}(this));
