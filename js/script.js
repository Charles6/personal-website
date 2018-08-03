
function help() {
  console.log("You've found the Easter Egg to my site!");
}

function color(input) {
  document.getElementsByTagName("h1")[0].style.color = input;
  document.getElementsByTagName("nav")[0].style.borderColor = input;
  document.getElementById("active").style.color = input;
}
