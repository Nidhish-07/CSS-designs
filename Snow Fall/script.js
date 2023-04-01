document.addEventListener("click", (e) => {
  let snow = document.createElement("span");
  snow.classList.add("snow");

  snow.style.left = e.offsetX + "px";
  snow.style.top = e.offsetY + "px";

  let snowSize = Math.random() * (100 - 20 + 1) + 20;

  snow.style.width = size + "px";
  snow.style.height = size + "px";

  document.body.appendChild(snow);

  setTimeout(()=>{
    snow.remove()
  },1000)
});
