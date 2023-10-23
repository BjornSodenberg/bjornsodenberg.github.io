var tb = document.getElementById("text-box");
var notification = document.getElementsByClassName("notification");
var mainContentTitle = document.getElementsByClassName("main-content-title");

function animateRectangle() {
  return new Promise((resolve) => {
    anime.set(tb, {
      opacity: 0,
    });

    anime.set(notification, {
      opacity: 0,
    });

    anime.set(mainContentTitle, {
      opacity: 0,
    });

    var notificationprop = {
      targets: notification,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 100,
    };

    var dnotificationprop = {
      targets: notification,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 300,
      delay: 2500,
    };

    var mainContentTitleprop = {
      targets: mainContentTitle,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 900,
    };

    var dmainContentTitleprop = {
      targets: mainContentTitle,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 300,
      delay: 2500,
    };

    var tbprop = {
      targets: tb,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 200,
      delay: 200,
    };

    var dtbprop = {
      targets: tb,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 300,
      delay: 2500,
    };

    anime(mainContentTitleprop).finished.then(() => {
      anime(notificationprop).finished.then(() => {
        Promise.all([anime(dnotificationprop).finished, anime(dmainContentTitleprop).finished]).then(() => {
          anime(tbprop).finished.then(() => {
            anime(dtbprop).finished.then(() => {})
          })
          setTimeout(() => {
            resolve();
          }, 2500);
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
