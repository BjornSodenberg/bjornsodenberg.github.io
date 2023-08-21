var r = document.getElementById("red-box");
var t = document.getElementById("text-box");
var rt = document.getElementById("red-box-text");

function animateRectangle() {
  return new Promise((resolve) => {
    anime.set(r, {
      transformOrigin: "top right",
      scaleX: 0,
      scaleY: 0,
    });

    anime.set(t, {
      opacity: 0,
    });

    anime.set(rt, {
      opacity: 0,
    });

    var rprop = {
      targets: r,
      scaleX: 1,
      scaleY: 1,
      easing: "easeInOutQuad",
      duration: 900,
    };

    var drprop = {
      targets: r,
      scaleX: 0,
      scaleY: 0,
      easing: "easeInOutQuad",
      duration: 900,
      delay: 100,
    };

    var tprop = {
      targets: t,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 100,
    };

    var dtprop = {
      targets: t,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 1500,
    };

    var rtprop = {
      targets: rt,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 100,
    };

    var drtprop = {
      targets: rt,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 2500,
    };

    anime(rprop).finished.then(() => {
      anime(rtprop).finished.then(() => {
        anime(drtprop).finished.then(() => {
          anime(drprop).finished.then(() => {
            anime(tprop).finished.then(() => {
              anime(dtprop).finished.then(() => {});
            });
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        });
      });
    });
  });
}

function animateLoop() {
  animateRectangle().then(() => {
    animateLoop();
  });
}

animateLoop();
