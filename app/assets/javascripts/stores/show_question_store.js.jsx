(function(root) {
  'use strict';

  var _question = [], CHANGE_EVENT = "CHANGE";


  root.ShowQuestionStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _question[0];
    },


    addChangeHandler: function(handler){
      root.ShowQuestionStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.ShowQuestionStore.removeListener(CHANGE_EVENT, handler);
    },


    DispatcherId: AppDispatcher.register(function(action){

    switch(action.actionType){

      case QuestionConstants.QUESTION_RECEIVED:
        _question = [action.question]; 
        root.ShowQuestionStore.emit(CHANGE_EVENT);
        break;

      case QuestionConstants.ANSWER_ADDED:
        root.ShowQuestionStore.all().answers.push(action.answer)
        root.ShowQuestionStore.emit(CHANGE_EVENT);
        break; 

      case QuestionConstants.ANSWER_REMOVED: 
        root.ShowQuestionStore.all().answers.forEach(function(answer) {
          if (answer.id === action.answer.id){
          var idx = root.ShowQuestionStore.all().answers.indexOf(answer);
          root.ShowQuestionStore.all().answers.splice(idx, 1); 
          }
        });
        root.ShowQuestionStore.emit(CHANGE_EVENT); 
        break; 
    }
     })
  });

  


}(this));
