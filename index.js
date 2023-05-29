/** @format */

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  let leftPosition = e.pageX - 11;
  let topPosition = e.pageY - 11;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
});
