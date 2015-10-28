(function(root) {
  'use strict';

  var _questions = [], CHANGE_EVENT = "CHANGE";


  root.QuestionStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _questions.slice();
    },

    find: function(id){ 
      var idx = -1
      _questions.forEach(function(question, idx1){
        if (question.id === id){
          idx = idx1;
        } 
      });
      return idx;
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
        _questions.push(action.question);
        console.log(_questions[0].created_at)
        _questions = _questions.sort(function(a,b){
          return a.updated_at < b.updated_at; 
        });
        console.log(_questions[0].created_at)
        root.QuestionStore.emit(CHANGE_EVENT);
        break; 

      case CommentConstants.COMMENT_CHANGED: 
        var idx = QuestionStore.find(action.question.id);
        _questions[idx] = action.question;
        root.QuestionStore.emit(CHANGE_EVENT);
        break;  
    }})
  });

  


}(this));
