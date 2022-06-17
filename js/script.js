const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  console.log(items);
  items.forEach((item) => {
    item.classList.remove("active");
    item.nextElementSibling.classList.remove("active");
  });
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
