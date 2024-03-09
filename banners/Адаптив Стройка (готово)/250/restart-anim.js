function restartAnimations() {
  setTimeout(function () {
    document.getElementById("shape").style.animation = "none";
    document.getElementById("question").style.animation = "none";
    document.getElementById("answer").style.animation = "none";
    document.getElementById("logo").style.animation = "none";
    document.getElementById("dummy").style.animation = "none";

    void document.body.offsetWidth;

    document.getElementById("shape").style.animation =
      "slideAndBounce .5s ease forwards, .5s slideAndBounce 7s ease forwards reverse";
    document.getElementById("question").style.animation =
      "1s showBox .5s ease forwards, 0.3s showBox 7s ease forwards reverse";
    document.getElementById("answer").style.animation =
      "0.5s showBox 1.5s ease forwards, 0.3s showBox 7s ease forwards reverse";
    document.getElementById("logo").style.animation =
      "0.5s showBox 2.5s ease forwards, 0.3s showBox 7s ease forwards reverse";
    document.getElementById("dummy").style.animation =
      "dummyAnimation 7s ease forwards";
  }, 1500);
}

document
  .getElementById("dummy")
  .addEventListener("animationend", restartAnimations);