function navigateTo(url)
{
  newLocation ="./"+url;
  location.replace(newLocation);
}

function funHelp(){
  document.getElementById("helpDiv").classList.toggle("noDisplay");
  document.getElementById("profileDiv").classList.add("noDisplay");
}
  
function funProfile(){
  document.getElementById("helpDiv").classList.add("noDisplay");
  document.getElementById("profileDiv").classList.toggle("noDisplay");
}
  


