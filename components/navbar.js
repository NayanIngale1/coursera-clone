const navbar = ()=>{
    return `
    <div id="choti_navbar">
    <div><i class="iconify" data-icon="clarity:menu-line" style="color: #363b42;" data-width="24"></i></div>
    <a href="index.html"><img src="./components/icons/download.svg" alt=""></a>
    <div><i class="iconify" data-icon="carbon:search" style="color: #373a3c;" data-width="20"></i></div>
</div>
<div id="jnavbar">
    <a href="index.html"><img class="coursera" src="./components/icons/download.svg" alt=""></a>
    <div id="explore">
        <button id="explore_button">Explore <span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 12px;" data-rotate="270deg"></span></button>
        
        <div id="explore_option">
            <div class="faltu_div_on_navbar"></div>
            <div class="left_explore_option">
                <ul>
                    <li>Goals</li>
                    <li>Take a free course</li>
                    <li id="Earn_a_Degree"><p>Earn a Degree</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Earn_a_Certificate"><p>Earn a Certificate</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Advance_your_career"><p>Advance your career</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li>Find your new career</li>
                    <li>Train your team</li>
                </ul>
                <ul>
                    <li>Subjects</li>
                    <li id="Data_Science"><p>Data Science</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Business"><p>Business</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Computer_Science"><p>Computer Science</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Information_Technology"><p>Information Technology</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Language_Learning"><p>Language Learning</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Health"><p>Health</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Personal_Development"><p>Personal Development</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Physical_Science_and_Engineering"><p>Physical Science and Engineering</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Social_Sciences"><p>Social Sciences</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Arts_and_Humanities"><p>Arts and Humanities</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                    <li id="Math_and_Logic"><p>Math and Logic</p><span class="iconify" data-icon="dashicons:arrow-left-alt2" style="font-size: 18px;" data-rotate="180deg"></span></li>
                </ul>
                <button>Browse all subjects</button>
            </div>
        </div>
    </div>
    <div id="input_debouncing_effect">
        <input id="input_of_navbar" type="text" placeholder="What do you want to learn?">
        <div id="input_debouncing">
            <p>Most Popular Specializations</p>
            <div class="input_debouncing_MPS">
                <div class="input_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="input_debouncing_MPS_right">
                    <h3>Google Data Analytics</h3>
                    <h4>Google</h4>
                </div>
            </div>
            <div class="input_debouncing_MPS">
                <div class="input_debouncing_MPS_left"><img src="./components/icons/googleSp2.jfif" alt="">
                </div>
                <div class="input_debouncing_MPS_right">
                    <h3>Google Project Management:</h3>
                    <h4>Google</h4>
                </div>
            </div>
            <div class="input_debouncing_MPS">
                <div class="input_debouncing_MPS_left"><img src="./components/icons/googleSp3.jfif" alt="">
                </div>
                <div class="input_debouncing_MPS_right">
                    <h3>Google UX Design</h3>
                    <h4>Google</h4>
                </div>
            </div>
            <div class="input_debouncing_PRN">
                <p>Popular right now</p>
                <h6><span class="iconify" data-icon="eva:search-outline" data-width="20"></span> python</h6>
                <h6><span class="iconify" data-icon="eva:search-outline" data-width="20"></span> data science</h6>
                <h6><span class="iconify" data-icon="eva:search-outline" data-width="20"></span> machine learning</h6>
            </div>
            
        </div>
    </div>
    <button id="search"><span class="iconify" data-icon="eva:search-outline" data-width="20"></span></button>
    <p><a href="">Online Degrees</a></p>
    <p class="p_tag_of_navbar"><a href="../FindNewCareer.html">Find your New Career</a></p>
    <p><a href="../ForBusinessEnterprises.html">For Enterprise</a></p>
    <p><a href="">For Universities</a></p>
    <p><a data-toggle="modal" data-target="#myModal" href="" id="log_in_text">Log In</a></p>
    <button data-toggle="modal" data-target="#myModal" id="join_for_free">Join for Free</button>
</div>
<div id="navbar_goals_subject">
    <div class="navbar_goal_header">
        <h1>Earn a Degree</h1>
        <button class="cross_button1"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <h5>Breakthrough pricing on 100% online degree designed to fit into your life.</h5>
    <div class="this_is_last_div">
        <div class="display_gride_goals">
            <h1>Data Science</h1>
            
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/michalUniversity.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Michigan</h3>
                    <h4>Master of Applied Data Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master in Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Colorado Boulder</h3>
                    <h4>Master of Science in Data Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Data Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Data and Network Analysis</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Universidad de los Andes</h3>
                    <h4>Maestría en Inteligencia Analítica de Datos</h4>
                </div>
            </div>
            <a href="#">View all Data Science degrees</a>

        </div>
        <div class="display_gride_goals">
            <h1>Business</h1>
            
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of North Texas</h3>
                    <h4>Bachelor of Applied Arts and Sciences</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>O.P. Jindal Global University</h3>
                    <h4>MBA in Business Analytics</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master of Business Administration (iMBA)</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Macquarie University</h3>
                    <h4>Global Master of Business Administration (Global MBA)</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HEC Paris</h3>
                    <h4>MSc in Innovation and Entrepreneurship</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Business Analytics</h4>
                </div>
            </div>
            <a href="#">View all Data Science degrees</a>

        </div>
        <div class="display_gride_goals">
            <h1>Computer Science</h1>
            
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UoL-Logo_180x180.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of London</h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master of Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/Penn-Shield.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Penn Engineering</h3>
                    <h4>Master of Computer and Information Technology</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare (1).jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Universidad de los Andes</h3>
                    <h4>Maestría en Ingeniería de Software</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Computer Vision</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Colorado Boulder</h3>
                    <h4>Master of Science in Electrical Engineering</h4>
                </div>
            </div>
            <a href="#">View all Data Science degrees</a>

        </div>
        <div class="display_gride_goals">
            <h1>More Degrees</h1>
            
            <div class="more_links">
                <div class="more_link_box">
                    <p>Public Health</p>
                    <p>Engineering</p>
                    <p>Social Sciences</p>
                    <p>Bachelor's Degrees</p>
                    <p>Master's Degrees</p>
                </div>
                <button>View all digree</button>
            </div>
        </div>
    </div>
    <div class="footer_heading">
        <h1>Earn credit toward a master's</h1>
        
    </div>
    <div class="footer_navbar_goal">
        <div class="last_footer_navbar">
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/ASUlogo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Big Data MasterTrack® Certificate</h3>
                    <h4>Degree credit•Expert feedback</h4>
                </div>
            </div>
        </div>
        <div class="last_footer_navbar">
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo (1).jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Innovation Management & Entrepreneurship MasterTrack® Certificate</h3>
                    <h4>Degree credit•Expert feedback</h4>
                </div>
            </div>
        </div>
        <a href="#">View all MasterTrack Certificates</a>
    </div>
</div>


<div id="navbar_goals_certificates">
    <div class="navbar_goal_header">
        <h1>Earn a Certificate</h1>
        <button class="cross_button2"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
    <div class="this_is_last_div">
        <div class="display_gride_goals">
            <h1>Data Science</h1>
            
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google Data Analytics</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>IBM Data Science</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Post Graduate Certificate in Data Science and Machine Learning</h3>
                    <h4>Live Sessions•Expert feedback</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Machine Learning for Analytics MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>DeepLearning.AI TensorFlow Developer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>AI and Machine Learning MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Preparing for Google Cloud Certification: Cloud Data Engineer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <a href="#">View all Data Science Certificates</a>

        </div>
        <div class="display_gride_goals">
            <h1>Business</h1>
            
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Facebook Marketing Analytics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Supply Chain Excellence MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google Project Management:</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Intuit Bookkeeping</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Salesforce Sales Operations</h3>
                </div>
            </div>
            <a href="#">View all Business Certificates</a>

        </div>
        <div class="display_gride_goals">
            <h1>Computer Science</h1>
            
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UoL-Logo_180x180.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google UX Design</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CenterILblock-ISQUAREOrangeBackgrnd.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>DeepLearning.AI TensorFlow Developer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/Penn-Shield.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Software Engineering MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare (1).jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>IBM Full Stack Cloud Developer</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>UX Design MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360 (1).jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>SAS Programmer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <a href="#">View all Computer Science Certificates</a>

        </div>
        <div class="display_gride_goals">
            <h1>More Certificate Programs</h1>
            
            <div class="more_links">
                <div class="more_link_box">
                    <p>Launch your career</p>
                    <p>Advance your career</p>
                    <p>Prepare for a certification</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="navbar_goals_career">
    <div class="navbar_goal_header">
        <h1>Advance your career</h1>
        <button class="cross_button3"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    
    <div class="this_is_last_div">
        <div class="display_gride_goals">
            <h1>Data Science</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Scientist</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Analyst</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
    
                <div class="jayinput_debouncing_MPS_right">
                    <h3>BI Analyst</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>BI Developer</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">

                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Engineer</h3>
                </div>
            </div>
        </div>
        <div class="display_gride_goals">
            <h1>Business</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Agile Project Manager (IT)</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Digital Marketing Specialist</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Digital Marketing Manager</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Project Coordinator</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Project Manager</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Social Media Coordinator</h3>
                </div>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Computer Science</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Computer User Support Specialist</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Network Administrator</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
              
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Network Engineer</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Product Designer</h3>
                </div>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Arts and Humanities</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Graphic Designer</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>UI/UX Designer</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all professional Certificate</button>
            </div>
            
    </div>
</div>
</div>

<div id="navbar_subject_data_science">
    <div class="navbar_goal_header">
        <h1>Data Science</h1>
        <button class="cross_button4"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Digree</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UoL-Logo_180x180.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of London</h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/michalUniversity.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Michigan</h3>
                    <h4>Master of Applied Data Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>O.P. Jindal Global University</h3>
                    <h4>MBA in Business Analytics</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master in Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Colorado Boulder</h3>
                    <h4>Master of Science in Data Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Data Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Preparing for Google Cloud Certification: Cloud Data Engineer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google Data Analytics</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>IBM Data Science</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Post Graduate Certificate in Data Science and Machine Learning</h3>
                    <h4>Live Sessions•Expert feedback</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Machine Learning for Analytics MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>DeepLearning.AI TensorFlow Developer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>AI and Machine Learning MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/uniandessquare.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Preparing for Google Cloud Certification: Cloud Data Engineer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>New courses</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Python</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>SQL</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Microsoft Excel</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Excel</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Machine Learning</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Science</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Analytics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Power BI</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Artificial Intelligence</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Statistics</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
    </div>
</div>

<div id="navbar_subject_data_business">
    <div class="navbar_goal_header">
        <h1>Business</h1>
        <button class="cross_button5"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of North Texas</h3>
                    <h4>Bachelor of Applied Arts and Sciences</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>O.P. Jindal Global University</h3>
                    <h4>MBA in Business Analytics</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master of Business Administration (iMBA)</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HEC Paris</h3>
                    <h4>MSc in Innovation and Entrepreneurship</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Business Analytics</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Universidad de Palermo</h3>
                    <h4>Maestría en Dirección de Empresas (MBA)</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Facebook Marketing Analytics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Supply Chain Excellence MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google Project Management:</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Intuit Bookkeeping</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Salesforce Sales Operations</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>New courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Project Management</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Microsoft Excel</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Excel</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Blockchain</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Digital Marketing</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Analytics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Power BI</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Design</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Communication Skills</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Marketing</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>
<div id="navbar_subject_data_computer_science">
    <div class="navbar_goal_header">
        <h1>Computer Science</h1>
        <button class="cross_button6"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of London</h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master of Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Penn Engineering</h3>
                    <h4>Master of Computer and Information Technology</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Universidad de los Andes</h3>
                    <h4>Maestría en Ingeniería de Software</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>HSE University</h3>
                    <h4>Master of Computer Vision</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Arizona State University</h3>
                    <h4>Master of Computer Science</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google UX Design</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>DeepLearning.AI TensorFlow Developer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Software Engineering MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>IBM Full Stack Cloud Developer</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>UX Design MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>SAS Programmer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>New courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Python</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>SQL</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Cybersecurity</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Blockchain</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Java</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Web Development</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>C++</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Artificial Intelligence</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>AWS</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Product Management</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>
<div id="navbar_subject_data_IT">
    <div class="navbar_goal_header">
        <h1>Information Technology</h1>
        <button class="cross_button7"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of London</h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of North Texas</h3>
                    <h4>Bachelor of Applied Arts and Sciences</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Master of Computer Science</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/illinois.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Penn Engineering</h3>
                    <h4>Master of Computer and Information Technology</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HSE_white.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Arizona State University</h3>
                    <h4>Master of Computer Science</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Digital Transformation Certificate</h3>
                    <h4>Live Sessions•Expert feedback</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Post Graduate Certificate in Data Science and Machine Learning</h3>
                    <h4>Live Sessions•Expert feedback</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google IT Support</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Preparing for Google Cloud Certification: Cloud Architect</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Cybersecurity MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google IT Automation with Python</h3>
                    <h4>Self-paced</h4>
                </div>
            </div>
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>New courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>AWS</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Cybersecurity</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Linux</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>DevOps</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>SAP</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Ethical Hacking</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Data Engineering</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Kubernetes</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Microsoft</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>
<div id="navbar_subject_data_language">
    <div class="navbar_goal_header">
        <h1>Language Learning</h1>
        <button class="cross_button8"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>National Research Tomsk State University</h3>
                    <h4>Global Master's in English Language Teaching Leadership</h4>
                </div>
            </div>
           
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Arizona State University TESOL</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>English Proficiency for Graduate Studies Certificate</h3>
                    <h4>Expert feedback•Live sessions</h4>
                </div>
            </div>
           
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="navbar_subject_data_health">
    <div class="navbar_goal_header">
        <h1>Health</h1>
        <button class="cross_button9"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Imperial College London</h3>
                    <h4>Postgraduate Certificate of Public Health</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Michigan</h3>
                    <h4>Master of Science in Population and Health Sciences</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Imperial College London</h3>
                    <h4>Master of Public Health</h4>
                </div>
            </div>
            
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Health Informatics MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>New courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Psychology</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Medicine</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Medical</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Biology</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Bioinformatics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Neuroscience</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Mental Health</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Anatomy</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Nutrition</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Pharmaceutical</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>                
        </div>
</div>
<div id="navbar_subject_data_personal">
    <div class="navbar_goal_header">
        <h1>Personal Development</h1>
        <button class="cross_button10"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>CertNexus Certified Ethical Emerging Technologist</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>ICPM Certified Supervisor</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Power Electronics and Motors for Electric Vehicles (EVs) Certificate</h3>
                    <h4>Live Sessions•Expert feedback</h4>
                </div>
            </div>
            
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Communication Skills</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Soft Skills</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Critical Thinking</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Teaching English</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Emotional Intelligence</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Public Speaking</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Teaching</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Learning How To Learn</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Mindfulness</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Positive Psychology</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>
<div id="navbar_subject_data_physical_science">
    <div class="navbar_goal_header">
        <h1>Physical Science and Engineering</h1>
        <button class="cross_button11"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Colorado Boulder</h3>
                    <h4>Master of Science in Electrical Engineering</h4>
                </div>
            </div>
           
            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Sustainability and Development MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>IBM AI Engineering</h3>
                    <h4>Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/CUBoulder_360x360.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Preparing for Google Cloud Certification: Cloud Engineer</h3>
                    <h4>Certification preparation•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/square-360px.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Construction Engineering and Management MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/HEC_logo.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Industrial Internet of Things MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Civil Engineering</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Physics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Sustainability</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Electronics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Robotics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Autocad</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Embedded Systems</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Astronomy</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>GIS</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Chemistry</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>
<div id="navbar_subject_data_social_science">
    <div class="navbar_goal_header">
        <h1>Social Sciences</h1>
        <button class="cross_button12"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/TSU2-01.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>National Research Tomsk State University</h3>
                    <h4>Global Master's in English Language Teaching Leadership</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/ImperialCollegeLondon_BLUE_500x500px.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Imperial College London</h3>
                    <h4>Postgraduate Certificate of Public Health</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>O.P. Jindal Global University</h3>
                    <h4>M.A. in International Relations, Security, and Strategy</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/ImperialCollegeLondon_BLUE_500x500px.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Imperial College London</h3>
                    <h4>Global Master of Public Health</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/360x360.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>O.P. Jindal Global University</h3>
                    <h4>M.A. in Public Policy</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/New-Block-M-Stacked-Blue-295C_600x600.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of Michigan</h3>
                    <h4>Master of Public Health</h4>
                </div>
            </div>
            
            <div class="more_links">
                <button>View all Degree</button>
            </div>
        </div>
        
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Social Work MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Instructional Design MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
           
            
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="navbar_subject_data_arts_hum">
    <div class="navbar_goal_header">
        <h1>Arts and Humanities</h1>
        <button class="cross_button13"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of North Texas</h3>
                    <h4>Bachelor of Applied Arts and Sciences</h4>
                </div>
            </div>

            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Certificate programs</h1>
            
            <h5>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/googleSp1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Google UX Design</h3>
                    <h4>No prerequisites•Self-paced</h4>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/IBM-Logo-Blk---Square.png" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>UX Design MasterTrack® Certificate</h3>
                    <h4>Expert feedback•Credit eligible</h4>
                </div>
            </div>
           
            <div class="more_links">
                <button>View all Certificate</button>
            </div>

        </div>
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Design</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Art</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Photoshop</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Music</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Photography</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Architecture</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Creative Writing</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Art History</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Drawing</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Film</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>
<div id="navbar_subject_data_math">
    <div class="navbar_goal_header">
        <h1>Math and Logic</h1>
        <button class="cross_button14"> <span class="iconify" data-icon="gridicons:cross" style="color: rgb(102, 102, 102);" data-width="30" ></span></button>
    </div>
    <div class="this_is_really_last_div">
        <div class="display_gride_goals">
            <h1>Degrees</h1>
            
            <h5>Breakthrough pricing on 100% online degrees designed to fit into your life.</h5>
            <div class="jayinput_debouncing_MPS">
                <div class="jayinput_debouncing_MPS_left"><img src="./components/icons/UNT-logo1.jfif" alt="">
                </div>
                <div class="jayinput_debouncing_MPS_right">
                    <h3>University of London</h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                </div>
            </div>

            <div class="more_links">
                <button>View all Degree</button>
            </div>

        </div>
        
        <div class="display_gride_goals">
            <h1>Get started</h1>
            
            <div class="jayinput_debouncing_MPS">
               
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Free courses</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Most popular</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Guided Projects under 2 hours</h3>
                </div>
            </div>
            <h1>Popular skills</h1>
            
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Mathematics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Calculus</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Linear Algebra</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Algebra</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Probability</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Optimization</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Math</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Discrete Mathematics</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Pre Calculus</h3>
                </div>
            </div>
            <div class="jayinput_debouncing_MPS">
                
                <div class="jayinput_debouncing_MPS_right">
                    <h3>Mathematics For Machine Learning</h3>
                </div>
            </div>
            <div class="more_links">
                <button>View all Skills</button>
            </div>
        </div>
        </div>
</div>`;
}


export default navbar;