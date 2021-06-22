function openNav() {
  document.getElementById("Header-nav").style.display = "block";
  document.getElementById("Header-nav").style.position = "absolute";
  document.getElementById("Header-nav").style.top = "-1em";
  document.getElementById("Header-nav").style.left = "0";
  document.getElementById("Header-nav").style.width = "100vw";
  document.getElementById("Header-nav").style.backgroundColor= "teal";
  document.getElementById("Header-nav").style.height= "100vh";
  document.getElementById("Myspecial").style.display = "none";
 // document.getElementById("Header-nav").style.padding = "1em";


}
function closeNav() {
  document.getElementById("Header-nav").style.display = "none";
 // document.getElementById("Myspecial").style.width = "0";
  document.getElementById("Myspecial").style.display = "block"
}
