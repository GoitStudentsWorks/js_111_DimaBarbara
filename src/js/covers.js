const cont = document.querySelector(".covers");
const style = document.createElement("style");

style.textContent = `
    @keyframes running-animation {
      0% {
        transform: translateZ(0);
      }
      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }
      `;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver(observerFunction, options);

function observerFunction() {
    document.head.appendChild(style);
    
}
observer.observe(cont)