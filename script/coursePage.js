import navbar from "../components/navbar.js";
import { Minifooter } from "../components/footer.js";
let navBar = document.getElementById("navbar");
navBar.innerHTML = navbar();
let footerDiv = document.getElementById("footer_div");
footerDiv.innerHTML = Minifooter();

let hide_me = document.querySelector("#log_in_text");
hide_me.style.display = "none";

let hide_me_also = document.querySelector("#join_for_free");
hide_me_also.style.display = "none";



const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  console.log("currentScroll:", currentScroll);
  if (currentScroll <= 0) {
    overview.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  if (currentScroll < 400) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  // if (currentScroll > 400) {
  //   body.classList.remove("scroll-down");
  //   body.classList.add("scroll-up");
  // }
  lastScroll = currentScroll;
});

const courseData = JSON.parse(localStorage.getItem("courseData"));
let { name, description, partnerLogo } = courseData;

let headBanner = document.getElementById("head-banner");
headBanner.innerHTML = `<div class="info-part">
        <h1>
          ${name}
        </h1>
        <p>
          Professional Certificates offer flexible, online training designed to
          get you job-ready for high-growth fields.
        </p>
        <p class="m-bold">
          7 day free trial | Less than 6 months at your own pace
        </p>
        <button id="start_course"><a href="#">Start up for free</a></button>
      </div>
      <div class="imgDiv">
        <p>Offered by</p>
        <img
          src=${partnerLogo}
          alt=""
        />
      </div>`;

let aboutCourse = document.getElementById("about-course");
aboutCourse.innerHTML = `<h1>About ${name} Professional Certificate</h1>
        <p id="discription">
          ${description}
        </p>
        <h1>Applied Learning Project</h1>
        <p>
          This Professional Certificate has a strong emphasis on applied
          learning. Except for the first course, all other courses include a
          series of hands-on labs in the IBM Cloud that will give you practical
          skills with applicability to real jobs, including:
        </p>`;


        let start_course_btn = document.getElementById("start_course");
start_course_btn.addEventListener("click", () => {
  

          start_course_btn.innerText = "Welcome To Course"
        })
     