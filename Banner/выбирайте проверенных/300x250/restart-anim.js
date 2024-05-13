function restartAnimations() {
  setTimeout(function () {
    document.getElementById("logo").style.animation = "none";
    document.getElementById("first-title").style.animation = "none";
    document.getElementById("second-title").style.animation = "none";
    document.getElementById("first-text").style.animation = "none";
    // document.getElementById("second-text").style.animation = "none";
    document.getElementById("disclaimer").style.animation = "none";
    document.getElementById("age").style.animation = "none";
    document.getElementById("dummy").style.animation = "none";

    void document.body.offsetWidth;

    document.getElementById("logo").style.animation = "0.4s rightLeft 0.4s ease forwards,0.4s rightLeft 8s ease forwards reverse";
    document.getElementById("first-title").style.animation = "0.4s rightLeft 1.4s ease forwards,0.4s rightLeft 5s ease forwards reverse";
    document.getElementById("second-title").style.animation = "0.4s rightLeft 1.6s ease forwards,0.4s rightLeft 5s ease forwards reverse";
    document.getElementById("first-text").style.animation = "0.4s bottomTop 2.8s ease forwards,0.4s bottomTop 5s ease forwards reverse";
    // document.getElementById("second-text").style.animation = "0.4s bottomTop 3s ease forwards,0.4s bottomTop 5s ease forwards reverse";
    document.getElementById("disclaimer").style.animation = "0.4s bottomTop 5.5s ease forwards,0.4s bottomTop 8s ease forwards reverse";
    document.getElementById("age").style.animation = "0.4s rightLeft 0.4s ease forwards,0.4s rightLeft 8s ease forwards reverse";
    document.getElementById("dummy").style.animation =
      "dummyAnimation 9s ease forwards";
  }, 0);
}

document
  .getElementById("dummy")
  .addEventListener("animationend", restartAnimations);
