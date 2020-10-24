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

window.onclick = function (event) {
  if (event.target == document.getElementById("helpDiv") || event.target == document.getElementById("profileDiv")
    || event.target == document.getElementById("modalDiv")) {
    document.getElementById("helpDiv").classList.add("noDisplay");
    document.getElementById("profileDiv").classList.add("noDisplay");
    hideModal();
  }
}

function hideModal(){
  document.getElementById("modalDiv").classList.add("noDisplay");
  document.getElementById("modalBtnDiv").classList.add("noDisplay");
  document.getElementById("modalWarnDiv").classList.add("noDisplay");
}

function showModal(){
  document.getElementById("modalDiv").classList.remove("noDisplay");
  document.getElementById("modalBtnDiv").classList.remove("noDisplay");
  document.getElementById("modalWarnDiv").classList.remove("noDisplay");
}
