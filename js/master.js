/* Show Hamburger Column */
function showBar(){
  let bar = document.getElementById('hamburger-column');

  if(bar.style.display == "none"){
    bar.style.display = "flex";
  }else{
    bar.style.display = "none";
  }
}
