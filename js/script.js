function navbarGen() {
  console.log("PathName  ="+ window.location.pathname);


  if(window.location.href.indexOf("index") > -1)  {
    document.getElementById("nav").innerHTML =
      "<strong><a href='index.html'>Home</a></strong><a href='experience.html'>Experience</a><a href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("experience") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a href='index.html'>Home</a><strong><a href='experience.html'>Experience</a></strong><a href='blog.html'>Writing</a><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("blog") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a href='index.html'>Home</a><a href='experience.html'>Experience</a><strong><a href='blog.html'>Writing</a></strong><a href='contactpage.html'>Contact</a>";
  }

  if(window.location.href.indexOf("contactpage") > -1)  {
    document.getElementById("nav").innerHTML =
      "<a href='index.html'>Home</a><a href='experience.html'>Experience</a><a href='blog.html'>Writing</a><strong><a href='contactpage.html'>Contact</a></strong>";
  }

}
