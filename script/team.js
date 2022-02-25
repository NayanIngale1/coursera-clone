import { Minifooter } from "../components/footer.js";
let footerDiv = document.getElementById("footer_div");
footerDiv.innerHTML = Minifooter();


const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

document.getElementById("buttonBuy").addEventListener("click", () => {
  window.location.href = "./checkoutBusiness.html";
});
document.getElementById("buttonguy").addEventListener("click", () => {
  window.location.href = "./checkoutBusiness.html";
});
