function navbarGen() {
  console.log("type 'help()' to open options")

  if(window.location.href.indexOf("index") > -1)  {
      document.getElementsByTagName("nav")[0].innerHTML =
      "<a id='active' href='index.html'>Home</a><a href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("experience") > -1)  {
      document.getElementsByTagName("nav")[0].innerHTML =
      "<a href='index.html'>Home</a><a id='active' href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("blog") > -1)  {
      document.getElementsByTagName("nav")[0].innerHTML =
      "<a href='index.html'>Home</a><a href='experience.html'>Experience</a><a id='active' href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("contactpage") > -1)  {
      document.getElementsByTagName("nav")[0].innerHTML =
      "<a href='index.html'>Home</a><a href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a id='active' href='contactpage.html'>Contact</a>";
  }

}

function help() {
  console.log("You've found the Easter Egg to my site!");
}

function color(input) {
  document.getElementsByTagName("h1")[0].style.color = input;
  document.getElementsByTagName("nav")[0].style.borderColor = input;
  document.getElementById("active").style.color = input;
}
