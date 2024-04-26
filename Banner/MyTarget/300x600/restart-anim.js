function restartAnimations() {
  setTimeout(function () {
    document.getElementById("content-text").style.animation = "none";
    document.getElementById("phone-container").style.animation = "none";
    document.getElementById("rating-box").style.animation = "none";
    document.getElementById("screen").style.animation = "none";
    document.getElementById("logo").style.animation = "none";
    document.getElementById("dummy").style.animation = "none";

    void document.body.offsetWidth;

    document.getElementById("content-text").style.animation =
      "0.7s showBox 2s ease forwards";
    document.getElementById("phone-container").style.animation =
      "0.7s showPhone 3s ease forwards";
    document.getElementById("rating-box").style.animation =
      "1s rating-box 4s ease forwards";
    document.getElementById("screen").style.animation =
      "0.7s showScreen 1s ease forwards reverse, 1s showScreen 15s ease forwards";
    document.getElementById("logo").style.animation =
      "0.7s logoScale 1s ease forwards reverse, 0.7s logoScale 15s ease forwards";
    document.getElementById("dummy").style.animation =
      "dummyAnimation 15s ease forwards";
  }, 1000);
}

document
  .getElementById("dummy")
  .addEventListener("animationend", restartAnimations);
