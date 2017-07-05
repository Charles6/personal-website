function navbarGen() {

  if(window.location.href.indexOf("index") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a id='active' href='index.html'>Home</a><a href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("experience") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a href='index.html'>Home</a><a id='active' href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("blog") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a href='index.html'>Home</a><a href='experience.html'>Experience</a><a id='active' href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("contactpage") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a href='index.html'>Home</a><a href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a id='active' href='contactpage.html'>Contact</a>";
  }

}
