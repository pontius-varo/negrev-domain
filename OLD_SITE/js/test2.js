function manfunc(){
    var x = window.prompt('Insert a positive or negative number.');
    doesthing(x);
}

function doesthing(x){
  if (x > 0){
    console.log ('ok dude, that\'s cool');
  }
  else if (x < 0) {
    console.log('nvm mind dude')
  }
}

console.log ('this is a test.')

$(document).ready(function(){
$("#button1").click(function(){
  $("p").toggle("slow");
  });
});
/*Below is a js script that counts views*/
/*this space is reserved for ^ script */

$(document).ready(function(){
  $("#button2").click(function(){
    $("#lis2").toggle();
  });
});
