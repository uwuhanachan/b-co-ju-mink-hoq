//use tab key to prank someone
var strs = [
      "Có chứ mình ju b lắm đó biết khongg moaz moaz moaz 😘😍",
      "Hỏi cì cục z tr tất nhin là có rồi â",
      "3 ju A nắm nắm nắm nắm",
    ];

var t = $('#txt'),
    str = strs[Math.floor(Math.random() * strs.length)],
    len = str.length,
    on = false;

t.keydown(function(e){
  var l = t.val().length%len+1;
  
  if(e.which == 9){
  	str = strs[(on = !on)|0];
    len = str.length;
  }
  
  t.val(str.substr(0,l));
  e.preventDefault();
})