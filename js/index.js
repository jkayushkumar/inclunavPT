function navigateTo(url)
{
  newLocation ="./"+url;
  location.replace(newLocation);
}




 function funHelp(){
    document.getElementById("help").classList.toggle("noDisplay");
    document.getElementById("profile").classList.add("noDisplay");
    }
  
function funProfile(){
      document.getElementById("help").classList.add("noDisplay");
      document.getElementById("profile").classList.toggle("noDisplay");
    }
  


