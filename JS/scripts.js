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
function goToTableSelect() {
	window.open("table_select.html","_self");
}
function isThereAnAstolfo()
{
	if (/*here we can add a check for the number of players in a certain table
		if it's more than 0 then this needs to be*/true) {
			document.getElementsByClassName("gameTable")[0].src = "img/tableA.png";
	}
	/*also this needs to be done with the other tables (most likely not the way i've done it hehe')*/
}
function openPokerGame() {
	window.open("poker.html","_self");
}