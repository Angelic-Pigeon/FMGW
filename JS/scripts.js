function myFunction() {
	document.getElementById("testID").innerHTML = "This for sure works Copium";
}
function goToHome() {
	window.open("index.html", "_self");
}
function goToTournaments()
{
	window.open("tourney_page.html", "_self");
}
function changePfp() {
	var pfp = document.getElementById("usrPfp");
	pfp.src = "img/heterosexual_kiss.png";
}
function clickAccountBtn() {
	
}
function clickSettingsBtn() {
	
}
function clickLogoutBtn() {
	
}
function dimFix(element) {
	var position = document.getElementById(element).position;
	console.log(position);
	
}
