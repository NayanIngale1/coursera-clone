
    let name_of_user = localStorage.getItem("User_name");
    let user_Name = document.querySelector("#user_name");
    user_Name.innerText = name_of_user;

let input_of_navbar = document.querySelector("#input_of_navbar");
let input_debouncing = document.querySelector("#input_debouncing");
let input_and_body = document.querySelector("body");
let click_body = false;
let click_input = false;
input_and_body.addEventListener("click",()=>{
            click_body = true;
            input_of_navbar.addEventListener("click",()=>{
                click_input= true;
            });       
            if(click_body&&click_input){
                input_debouncing.style.display="block";
                click_body = false;
                click_input = false;
            }
            if(click_body&&!click_input){
                input_debouncing.style.display="none";
                click_body = false;
                click_input = false;
            }
});

let timerId;
const debouncing= (timeId)=>{
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(()=>{
        main();
    },1000);
}

input_of_navbar.addEventListener("keyup",debouncing);

const main = async()=>{
    if(search_data() == null){
        return;
    }
    else{
        let data = await search_data();
        filter_my_data(data);
        sort_my_data(data);
        
    }
}
let input_term; 
const search_data =async ()=>{
    try {
        input_term = input_of_navbar.value;
        let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${input_term}&includes=photoUrl,partnerIds,shortName,location&fields=partnerIds ,photoUrl`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
search_data();
const filter_my_data = (data)=>{
    let {
        name,
        partnerIds,
        photoUrl
    } = data.elements[0];
        
    let id = data.linked["partners.v1"].filter((el)=>{
        return el.id==partnerIds[0];
    });
    let partners_name = id[0].name;
    append_debouncing_data(photoUrl,name,partners_name);
}
const sort_my_data = (data)=>{
    let names_of_search = [];
    for(let x =0; x<7;x++){
        names_of_search.push(data.elements[x].name);
    }
    append_debouncing_data_2(names_of_search);
    
}
const append_debouncing_data = (photoUrl,name,partners_name)=>{
    input_debouncing.innerHTML=null;
    let div1 =  document.createElement("div");
    div1.setAttribute("class","input_debouncing_MPS")
    let div2 =  document.createElement("div");
    div2.setAttribute("class","input_debouncing_MPS_left")
    let div3 =  document.createElement("div");
    div3.setAttribute("class","input_debouncing_MPS_right")
    div1.append(div2,div3);
    let photo = document.createElement("img");
    photo.src = photoUrl;
    let p1 = document.createElement("h3");
    p1.innerText = name;
    let p2 = document.createElement("h4");
    p2.innerText = partners_name;
    div2.append(photo);
    div3.append(p1,p2);
    input_debouncing.append(div1);
}
const append_debouncing_data_2 = (names)=>{
    console.log(names);
    let div = document.createElement("div");
    div.setAttribute("class","input_debouncing_PRN");
    let p = document.createElement("p");
    div.append(p);
    p.innerText = "Popular Searches";
    let hello = document.querySelector("#jay");
    names.map((el)=>{
        let div1 = document.createElement("div");
        div1.setAttribute("class","input_debouncing_PRN_div");
        let img = document.createElement("img");
        img.src = "./icons/searchIcon.jpg"
        let p1 = document.createElement("h6");
        p1.innerText = el;
        div1.append(img,p1);
        div.append(div1)
    })
    document.querySelector("#input_debouncing").append(div);
}


let hover_in_explorer = document.querySelector("#explore_option");
let hover_in_list =    document.querySelector("#Earn_a_Degree");
let hover_in_list_2 =  document.querySelector("#Earn_a_Certificate");
let hover_in_list_3 =  document.querySelector("#Advance_your_career");
let hover_in_list_4 =  document.querySelector("#Data_Science");
let hover_in_list_5 =  document.querySelector("#Business");
let hover_in_list_6 =  document.querySelector("#Computer_Science");
let hover_in_list_7 =  document.querySelector("#Information_Technology");
let hover_in_list_8 =  document.querySelector("#Language_Learning");
let hover_in_list_9 =  document.querySelector("#Health");
let hover_in_list_10 = document.querySelector("#Personal_Development");
let hover_in_list_11 = document.querySelector("#Physical_Science_and_Engineering");
let hover_in_list_12 = document.querySelector("#Social_Sciences");
let hover_in_list_13 = document.querySelector("#Arts_and_Humanities");
let hover_in_list_14 = document.querySelector("#Math_and_Logic");
let display_this_1 =   document.querySelector("#navbar_goals_subject");
let display_this_2 =   document.querySelector("#navbar_goals_certificates");
let display_this_3 =   document.querySelector("#navbar_goals_career");
let display_this_4 =   document.querySelector("#navbar_subject_data_science");
let display_this_5 =   document.querySelector("#navbar_subject_data_business");
let display_this_6 =   document.querySelector("#navbar_subject_data_computer_science");
let display_this_7 =   document.querySelector("#navbar_subject_data_IT");
let display_this_8 =   document.querySelector("#navbar_subject_data_language");
let display_this_9 =   document.querySelector("#navbar_subject_data_health");
let display_this_10 =  document.querySelector("#navbar_subject_data_personal");
let display_this_11 =  document.querySelector("#navbar_subject_data_physical_science");
let display_this_12 =  document.querySelector("#navbar_subject_data_social_science");
let display_this_13 =  document.querySelector("#navbar_subject_data_arts_hum");
let display_this_14 =  document.querySelector("#navbar_subject_data_math");

hover_in_list.addEventListener("mouseover",()=>{
        display_this_1.style.display="block";
});
hover_in_list.addEventListener("mouseout",()=>{
    display_this_1.style.display="none";
});
display_this_1.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_1.style.display="block";
});


hover_in_list_2.addEventListener("mouseover",()=>{
    display_this_2.style.display="block";
});
hover_in_list_2.addEventListener("mouseout",()=>{
    display_this_2.style.display="none";
});
display_this_2.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_2.style.display="block";
    
});

hover_in_list_3.addEventListener("mouseover",()=>{
        display_this_3.style.display="block";
});
hover_in_list_3.addEventListener("mouseout",()=>{
    display_this_3.style.display="none";
});
display_this_3.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_3.style.display="block";
    
});

hover_in_list_4.addEventListener("mouseover",()=>{
        display_this_4.style.display="block";
});
hover_in_list_4.addEventListener("mouseout",()=>{
    display_this_4.style.display="none";
});
display_this_4.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_4.style.display="block";
    
});

hover_in_list_5.addEventListener("mouseover",()=>{
    display_this_5.style.display="block";
});
hover_in_list_5.addEventListener("mouseout",()=>{
    display_this_5.style.display="none";
});
display_this_5.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_5.style.display="block";
    
});

hover_in_list_6.addEventListener("mouseover",()=>{
    display_this_6.style.display="block";
});
hover_in_list_6.addEventListener("mouseout",()=>{
    display_this_6.style.display="none";
});
display_this_6.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_6.style.display="block";
    
});

hover_in_list_7.addEventListener("mouseover",()=>{
    display_this_7.style.display="block";
});
hover_in_list_7.addEventListener("mouseout",()=>{
    display_this_7.style.display="none";
});
display_this_7.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_7.style.display="block";
    
});

hover_in_list_8.addEventListener("mouseover",()=>{
    display_this_8.style.display="block";
});
hover_in_list_8.addEventListener("mouseout",()=>{
    display_this_8.style.display="none";
});
display_this_8.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_8.style.display="block";
    
});

hover_in_list_9.addEventListener("mouseover",()=>{
    display_this_9.style.display="block";
});
hover_in_list_9.addEventListener("mouseout",()=>{
    display_this_9.style.display="none";
});
display_this_9.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_9.style.display="block";
    
});

hover_in_list_10.addEventListener("mouseover",()=>{
    display_this_10.style.display="block";
});
hover_in_list_10.addEventListener("mouseout",()=>{
    display_this_10.style.display="none";
});
display_this_10.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_10.style.display="block";
    
});

hover_in_list_11.addEventListener("mouseover",()=>{
    display_this_11.style.display="block";
});
hover_in_list_11.addEventListener("mouseout",()=>{
    display_this_11.style.display="none";
});
display_this_11.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_11.style.display="block";
    
});

hover_in_list_12.addEventListener("mouseover",()=>{
    display_this_12.style.display="block";
});
hover_in_list_12.addEventListener("mouseout",()=>{
    display_this_12.style.display="none";
});
display_this_12.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_12.style.display="block";
    
});

hover_in_list_13.addEventListener("mouseover",()=>{
    display_this_13.style.display="block";
});
hover_in_list_13.addEventListener("mouseout",()=>{
    display_this_13.style.display="none";
});
display_this_13.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_13.style.display="block";
    
});

hover_in_list_14.addEventListener("mouseover",()=>{
    display_this_14.style.display="block";
});
hover_in_list_14.addEventListener("mouseout",()=>{
    display_this_14.style.display="none";
});
display_this_14.addEventListener("mouseover",()=>{
    hover_in_explorer.style.display="block";
    display_this_14.style.display="block";
});
let cross_button1 = document.querySelector(".cross_button1");

cross_button1.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button2 = document.querySelector(".cross_button2");

cross_button2.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button3 = document.querySelector(".cross_button3");

cross_button3.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button4 = document.querySelector(".cross_button4");

cross_button4.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button5 = document.querySelector(".cross_button5");

cross_button5.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button6 = document.querySelector(".cross_button6");

cross_button6.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button7 = document.querySelector(".cross_button7");

cross_button7.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button8 = document.querySelector(".cross_button8");

cross_button8.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button9 = document.querySelector(".cross_button9");

cross_button9.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button10 = document.querySelector(".cross_button10");

cross_button10.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button11 = document.querySelector(".cross_button11");

cross_button11.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button12 = document.querySelector(".cross_button12");

cross_button12.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button13 = document.querySelector(".cross_button13");

cross_button13.addEventListener("click",()=>{
    window.location.reload();
})
let cross_button14 = document.querySelector(".cross_button14");

cross_button14.addEventListener("click",()=>{
    window.location.reload();
})