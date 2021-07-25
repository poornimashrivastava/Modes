const button = document.getElementById("btn");

button.addEventListener("click", function() {
  document.querySelector("#main-img").classList.toggle("mountain2");
  // document.querySelector(".sun").setAttribute("src", "images/moon.png");
  document.querySelector("#sunny").classList.toggle("moon");
  // document.body.classList.toggle("dark");
  if (document.querySelector("#main-head").innerHTML === "This is light mode.") {
    document.querySelector("#main-head").innerHTML = "This is dark mode.";
    document.querySelector("#main-head").style.color = "#ddd";
    document.body.style.backgroundColor = "#1A1A2E";
  }
  else {
    document.querySelector("#main-head").innerHTML = "This is light mode.";
    document.querySelector("#main-head").style.color = "#51C4D3";
    document.body.style.backgroundColor = "#ddd";
  }
});
