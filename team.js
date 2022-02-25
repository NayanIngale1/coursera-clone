import { Minifooter } from "../components/footer.js";
let footerDiv = document.getElementById("footer_div");
footerDiv.innerHTML = Minifooter();


const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});