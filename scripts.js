function revealColour(event) {
  const element = document.getElementById('hover-element');
  const elementWidthHalf = element.offsetWidth / 2;
  element.style.left = `${event.pageX - elementWidthHalf}px`;
  element.style.top = `${event.pageY - elementWidthHalf}px`;
}

window.onload = function() {
  this.addEventListener('mousemove', revealColour);
};
