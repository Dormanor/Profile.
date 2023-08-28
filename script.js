        //Theme switcher
     // function to set a given theme/color-scheme
     function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-light') {
            setTheme('theme-dark');
        } else {
            setTheme('theme-light');
        }
    }

    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('theme') === 'theme-light') {
            setTheme('theme-dark');
            document.getElementById('slider').checked = false;
        } else {
            setTheme('theme-dark');
          document.getElementById('slider').checked = true;
        }
    })();
    //popup-stuff
    const section = document.querySelector("section"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".bruh"),
    closeBtn = document.querySelector(".close-btn");

  showBtn.addEventListener("click", () => section.classList.add("active"));

  overlay.addEventListener("click", () =>
    section.classList.remove("active")
  );

  closeBtn.addEventListener("click", () =>
    section.classList.remove("active")
  );

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
  }
}
}
}

//for the loading text to dissapear
  // get access to the element you want to hide
var element = document.getElementById("myText");

// use the setTimeout method to invoke a function after a delay
setTimeout(function() {
// set the element's style.display property to none
element.style.display = "none";
}, 20000); // 10000 milliseconds = 10 seconds

function openPopup() {
window.open("https://dormanor.github.io/Profile./source-code.html", "popup", "width=600,height=600");
}
function displayPhrase()
          {
document.getElementById ("change").innerHTML = 'Copied!';
}
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
document.getElementById(
    "contextMenu").style.display = "none"
}

function rightClick(e) {
e.preventDefault();

if (document.getElementById(
    "contextMenu").style.display == "block")
    hideMenu();
else {
    var menu = document
        .getElementById("contextMenu")
          
    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
}
}
function showDiscordID() {
  const discordIDshow = document.getElementById("discordIDshow");
  discordIDshow.classList.add("show");
  discordIDshow.textContent = "@dormanor";
}

function hideDiscordID() {
  const discordIDshow = document.getElementById("discordIDshow");
  discordIDshow.classList.remove("show");
  discordIDshow.textContent = "Discord";
}

function copyText() {
  const text = "dormanor";
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  document.getElementById("discordIDshow").textContent = "ID copied!";
}
