import navbar from "../components/navbar.js";
import { footer } from "../components/footer.js";
let navBar = document.getElementById("navbar");
navBar.innerHTML = navbar();
let footerDiv = document.getElementById("footer_div");
footerDiv.innerHTML = footer();



const search_data =async ()=>{
    try {
        let input_term = JSON.parse(localStorage.getItem("query"));
        let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${input_term}&includes=photoUrl,partnerIds,shortName,location&fields=partnerIds ,photoUrl`);
        let data = await res.json();
        console.log(data);
        filter_my_data(data);
    } catch (error) {
        console.log(error);
    }
}
search_data();
const filter_my_data = (data)=>{
    let i=0;
    data.elements.forEach((el)=>{
        let {
        name,
        partnerIds,
        photoUrl
    } = el;
        
    let id = data.linked["partners.v1"].filter((ll)=>{
        return ll.id==partnerIds[0];
    });
    let partners_name = id[0].name;
    append_data(photoUrl,name,partners_name);
    });
    
}
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

const append_data = (photoUrl,name,partners_name)=>{

    let bigcontainer = document.createElement("div");
    bigcontainer.setAttribute("class", "just_for_border")
    
    let div1container = document.createElement("div");
    div1container.setAttribute("class", "boxSearch")

    let image = document.createElement("img");
    image.src = photoUrl;
    
    let div2container = document.createElement("div");
    div2container.setAttribute("class", "left_data")
    
    let coursename = document.createElement("h2");
    coursename.innerHTML = name;

    let partners = document.createElement("h3");
    partners.innerHTML = partners_name;

    let speciallisation = document.createElement("h4");
    speciallisation.innerHTML = "Specilization";

    let rating_div = document.createElement("div");
    rating_div.setAttribute("class", "rating")

    let star = document.createElement("img");
    star.src = "../components/icons/stars.jpg";

    let Rating = document.createElement("h5");
    let x = (Math.random() * (5)).toFixed(1);
    if(x<4){
        x = 4 +  +(Math.random()*1).toFixed(1);
    }
    Rating.innerHTML = x ;

    let Students = document.createElement("p");
    Students.innerHTML = Math.floor(Math.random() * 999) + "K" + " Students";
    rating_div.append(star, Rating, Students)
    div2container.append(coursename,partners,speciallisation,rating_div );
    div1container.append(image,div2container)
    bigcontainer.append(div1container)



    document.getElementById("searchResult").append(bigcontainer);


}


