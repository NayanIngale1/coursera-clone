import navbar from "../components/navbar.js";
import { Minifooter } from "../components/footer.js";
let navBar = document.getElementById("navbar");
navBar.innerHTML = navbar();
let footerDiv = document.getElementById("footer_div");
footerDiv.innerHTML = Minifooter();


const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

let hide_me = document.querySelector("#log_in_text");
hide_me.style.display = "none";

let hide_me_also = document.querySelector("#join_for_free");
hide_me_also.style.display = "none";

