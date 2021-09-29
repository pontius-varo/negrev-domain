function changePosition(){
  if(document.getElementById("title").innerHTML == "Antonio's Realm"){
    document.getElementsByClassName("footer")[0].style.position = "fixed";
  }else{
    console.log('No need');
    return;
  }
  console.log('Changed!');
}

changePosition();
