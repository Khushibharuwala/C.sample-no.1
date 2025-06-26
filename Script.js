document.querySelector("header").style.opacity = 0;
  window.onload = () => {
    document.querySelector("header").style.transition = "opacity 2s";
    document.querySelector("header").style.opacity = 1;
  };

