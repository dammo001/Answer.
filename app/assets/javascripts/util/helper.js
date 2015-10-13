  Array.prototype.includes = function(num) {
    for (var i = 0; i < this.length; i++) {
      if(this[i] === num){
        return true;
      }
    }
    return false;
  };