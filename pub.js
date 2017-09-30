var pub = (function(){
  return{
    no_d : function(id, val){
      //no download
      var i = document.getElementById(id);
      var v = document.getElementById(val).value;
      i.href = "data:text;https://cursorweb.github.io/textmaker/,"+v;
    },
    d : function(id){
      //download
    },
  };
})();
