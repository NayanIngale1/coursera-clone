import navbar from "../components/navbar.js";
import { footer } from "../components/footer.js";
let navBar = document.getElementById("navbar");
navBar.innerHTML = navbar();
let footerDiv = document.getElementById("footer_div");
footerDiv.innerHTML = footer();

let hide_me = document.querySelector("#log_in_text");
hide_me.style.display = "none";

let hide_me_also = document.querySelector("#join_for_free");
hide_me_also.style.display = "none";

let input_term = JSON.parse(localStorage.getItem("query"));
let counting;
const search_data = async () => {
  try {
    let res = await fetch(
      `https://api.coursera.org/api/courses.v1?limit=50&q=search&query=${input_term}&includes=instructorIds,photoUrl,partnerIds,description,largeIcon,shortName,location&fields=instructorIds,partnerIds ,location,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes,primaryLanguages`
    );
    let data = await res.json();
    console.log(data);
    filter_my_data(data);
  } catch (error) {
    console.log(error);
  }
};
search_data();
const filter_my_data = (data) => {
  counting = data.elements.length;
  let i = 0;
  data.elements.forEach((el) => {
    let { name, partnerIds, photoUrl, certificates, description, partnerLogo } =
      el;

    let id = data.linked["partners.v1"].filter((ll) => {
      return ll.id == partnerIds[0];
    });
    let partners_name = id[0].name;
    append_data(
      photoUrl,
      name,
      partners_name,
      certificates,
      description,
      partnerLogo
    );
  });
};
// let i=0;
//     while(i<10){
//         let el = data.elements[i];
//     let {
//             name,
//             partnerIds,
//             photoUrl
//         } = el;
//         let id = data.linked["partners.v1"].filter((ll)=>{
//             return ll.id==partnerIds[0];
//         });
//         let partners_name = id[0].name;
//         append_data(photoUrl,name,partners_name);
//         i++;
//     }


const append_data = (
  photoUrl,
  name,
  partners_name,
  certificates,
  description,
  partnerLogo
) => {
  let heading = document.querySelector("#head_of_search");
  heading.innerHTML = `${
    Math.round(Math.random() * 7) * 307
  } total results for "${input_term}"`;

  let bigcontainer = document.createElement("div");
  bigcontainer.setAttribute("class", "just_for_border");
  bigcontainer.addEventListener("click", () => {
    let courseData = {
      name: name,
      description: description,
      partnerLogo: partnerLogo,
    };
    localStorage.setItem("courseData", JSON.stringify(courseData));
    window.location.href = "../coursePage.html";
  });

  let div1container = document.createElement("div");
  div1container.setAttribute("class", "boxSearch");

  let image = document.createElement("img");
  image.src = photoUrl;

  let div2container = document.createElement("div");
  div2container.setAttribute("class", "left_data");

  let coursename = document.createElement("h2");
  coursename.innerHTML = name;

  let partners = document.createElement("h3");
  partners.innerHTML = partners_name;

  let speciallisation = document.createElement("h4");
  speciallisation.innerHTML = "Specialization";

  let rating_div = document.createElement("div");
  rating_div.setAttribute("class", "rating");

  let star = document.createElement("img");
  star.src = "../components/icons/stars.jpg";

  let Rating = document.createElement("h5");
  let x = (Math.random() * 5).toFixed(1);
  if (x < 4) {
    x = 4 + +(Math.random() * 1).toFixed(1);
  }
  Rating.innerHTML = x;

  let Students = document.createElement("p");
  Students.innerHTML = Math.floor(Math.random() * 999) + "K" + " Students";
  rating_div.append(star, Rating, Students);
  div2container.append(coursename, partners, speciallisation, rating_div);
  div1container.append(image, div2container);
  bigcontainer.append(div1container);

  document.getElementById("searchResult").append(bigcontainer);
};





//-------------------------slideshow---------------->
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

