function restartAnimations() {
  setTimeout(function () {
    document.getElementById("question").style.animation = "none";
    document.getElementById("answer").style.animation = "none";
    document.getElementById("phone-content").style.animation = "none";
    Array.prototype.map.call(
      document.getElementsByClassName("pin"),
      (item) => (item.style.animation = "none")
    );
    document.getElementById("pin-big-small").style.animation = "none";
    document.getElementById("screen").style.animation = "none";
    document.getElementById("logo").style.animation = "none";
    document.getElementById("dummy").style.animation = "none";

    void document.body.offsetWidth;

    document.getElementById("question").style.animation =
      "0.7s showBox 0.5s ease forwards, 0.7s showBox 7s ease forwards reverse";

    document.getElementById("answer").style.animation =
      "0.7s showBox 0.5s ease forwards, 0.7s showBox 7s ease forwards reverse";

    document.getElementById("phone-content").style.animation =
      "0.7s showPhone 1s ease forwards, 0.7s showPhone 7s ease forwards reverse";

    Array.prototype.map.call(
      document.getElementsByClassName("pin"),
      (item) => (item.style.animation = "pinAnimation 0.3s ease 1.5s forwards")
    );

    document.getElementById("pin-big-small").style.animation =
      "pinAnimation 0.3s ease 1.5s forwards, bounce 0.5s ease 2.2s forwards";

    document.getElementById("screen").style.animation =
      "1s showScreen 5s ease forwards, 0.7s showScreen 7.5s ease forwards reverse";

    document.getElementById("logo").style.animation =
      "0.7s logoScale 5.1s ease forwards, 0.7s logoScale 7.5s ease forwards reverse";

    document.getElementById("dummy").style.animation =
      "dummyAnimation 7.5s ease forwards";
  }, 700);
}

document
  .getElementById("dummy")
  .addEventListener("animationend", restartAnimations);
