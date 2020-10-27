$(function() {
  var offsetWidth = document.getElementById('parentDiv').offsetWidth;
  var offsetHeight = document.getElementById('parentDiv').offsetHeight;
  console.log(offsetWidth);
  console.log(offsetHeight);
  // document.getElementById("contentDiv").style.width=offsetWidth;
  // document.getElementById("contentDiv").style.height=0.56*offsetWidth; 
});
function navigateTo(url)
{
  newLocation ="./"+url;
  location.replace(newLocation);
}

function navigateUpTo(url)
{
  newLocation="../"+url;
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

function hideModal(){
  document.getElementById("warnModalDiv").classList.add("noDisplay");
  document.getElementById("modalBtnDiv").classList.add("noDisplay");
  document.getElementById("modalWarnDiv").classList.add("noDisplay");
}

function showModal(){
  document.getElementById("warnModalDiv").classList.remove("noDisplay");
  document.getElementById("modalBtnDiv").classList.remove("noDisplay");
  document.getElementById("modalWarnDiv").classList.remove("noDisplay");
}

function showProfile(){
  document.getElementById("profileModalDiv").classList.remove("noDisplay");
  document.getElementById("userProfileMain").classList.remove("noDisplay");
  document.getElementById("profileHead").classList.remove("noDisplay");
  document.getElementById("profileWarn").classList.remove("noDisplay");
  document.getElementById("profileFirst").classList.remove("noDisplay");
  document.getElementById("profileLast").classList.remove("noDisplay");
  document.getElementById("profileMail").classList.remove("noDisplay");
  document.getElementById("profileOrg").classList.remove("noDisplay");
  document.getElementById("profilePass").classList.remove("noDisplay");
  document.getElementById("profilePass2").classList.remove("noDisplay");
  document.getElementById("profileMsgDiv").classList.remove("noDisplay");
  document.getElementById("profileSave").classList.remove("noDisplay");
  document.getElementById("profileCancel").classList.remove("noDisplay");
  document.getElementById("nameOneHead").classList.remove("noDisplay");
  document.getElementById("nameLastHead").classList.remove("noDisplay");
  document.getElementById("mailProf").classList.remove("noDisplay");
  document.getElementById("orgProf").classList.remove("noDisplay");
  document.getElementById("passOneProf").classList.remove("noDisplay");
  document.getElementById("passTwoProf").classList.remove("noDisplay");
  document.getElementById("req20").classList.remove("noDisplay");
  document.getElementById("req21").classList.remove("noDisplay");
  document.getElementById("req22").classList.remove("noDisplay");
  document.getElementById("req23").classList.remove("noDisplay");
}

function hideProfile(){
  document.getElementById("profileModalDiv").classList.add("noDisplay");
  document.getElementById("userProfileMain").classList.add("noDisplay");
  document.getElementById("profileHead").classList.add("noDisplay");
  document.getElementById("profileWarn").classList.add("noDisplay");
  document.getElementById("profileFirst").classList.add("noDisplay");
  document.getElementById("profileLast").classList.add("noDisplay");
  document.getElementById("profileMail").classList.add("noDisplay");
  document.getElementById("profileOrg").classList.add("noDisplay");
  document.getElementById("profilePass").classList.add("noDisplay");
  document.getElementById("profilePass2").classList.add("noDisplay");
  document.getElementById("profileMsgDiv").classList.add("noDisplay");
  document.getElementById("profileSave").classList.add("noDisplay");
  document.getElementById("profileCancel").classList.add("noDisplay");
  document.getElementById("nameOneHead").classList.add("noDisplay");
  document.getElementById("nameLastHead").classList.add("noDisplay");
  document.getElementById("mailProf").classList.add("noDisplay");
  document.getElementById("orgProf").classList.add("noDisplay");
  document.getElementById("passOneProf").classList.add("noDisplay");
  document.getElementById("passTwoProf").classList.add("noDisplay");
  document.getElementById("req20").classList.add("noDisplay");
  document.getElementById("req21").classList.add("noDisplay");
  document.getElementById("req22").classList.add("noDisplay");
  document.getElementById("req23").classList.add("noDisplay");
}

window.onclick = function (event) {
  if (event.target == document.getElementById("helpDiv") || event.target == document.getElementById("profileDiv")) {
    document.getElementById("helpDiv").classList.add("noDisplay");
    document.getElementById("profileDiv").classList.add("noDisplay");
  }
}