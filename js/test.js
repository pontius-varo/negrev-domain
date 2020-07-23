function openit(){
  window.open("https://www.youtube.com/watch?v=ZSM5t_0LIi8")
}

function choose(choice){
  question1(choice);
}

function question1(choice){
  var notdone = ("Get to it friend!");
  var aredone = ("Good, go and relax!");

  if(choice == true) {
    alert(aredone);
  }
  else if(choice == false){
    alert(notdone);
  }
}

var magnapersona = {

praenomen:" Aurelianus ",
nomen:" Pontius ",
cognomen:" Africanus ",
civitas:" Hispalis ",
provincia:" Baetica ",
llave:objectex

}

function objectex(){
  console.log ('I am'+ magnapersona.praenomen + magnapersona.nomen + magnapersona.cognomen);
  console.log ('I lived in..' + magnapersona.provincia + ', specifically in the city of' + magnapersona.civitas);
}

function test3(){
  var myfunc = magnapersona.llave;
  myfunc()
  }

console.log('Communists are not human beings.')
