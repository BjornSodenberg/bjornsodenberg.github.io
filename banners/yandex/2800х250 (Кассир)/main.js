var tb = document.getElementById("text-box");
var nb = document.getElementById("notif-box");

function animateRectangle() {
  return new Promise((resolve) => {
    anime.set(tb, {
      opacity: 0,
    });

    anime.set(nb, {
      opacity: 0,
    });

    var nb_prop = {
      targets: nb,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 900,
    };

    var dnb_prop = {
      targets: nb,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 2500,
    };

    var tb_prop = {
      targets: tb,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 100,
    };

    var dtb_prop = {
      targets: tb,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 100,
      delay: 1500,
    };

    anime(nb_prop).finished.then(() => {
      anime(dnb_prop).finished.then(() => {
        anime(tb_prop).finished.then(() => {
          anime(dtb_prop).finished.then(() => {})
          setTimeout(() => {
            resolve();
          }, 1500);
        })
      })
    })
  });
}

function animateLoop() {
  animateRectangle().then(() => {
    animateLoop();
  });
}

animateLoop();
