import React from "react";

function About(){
    return(
        // <!-- About me -->
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center text-light p-5">
                    {/* <!--About Me Section--> */}
                    <h1 className="border-bottom border-light text-left mb-5">About Me</h1>
                    {/* <!--Image of me--> */}
                    <img src="assets/images/Me.jpg" class="img-fluid float-left p-5" alt="Me" /> 
                    <p> My Name is Corey Post, I am a father and husband. I have ten plus years of experience working on cars which has trained and helped me
                    with creating problem solving skills and be able to adapt to the unexpected when things do not go as planned and test my 
                    time management skills to get the job done effiecently and on time.
                    </p>
                    <p>I am currently interested in a career change from working on vehicles since I was a teenager to something that interests me alot and that I can 
                    apply my problem-solving skills in. Programming is very unique and I enjoy learning something new from it everyday. 
                    I started this journey going back to college at Weber State and then transitioned into the U of U bootcamp in hopes of reaching my goal in being 
                    a programmer in the field. I have learned HTML, CSS, Javascript, MySQL, MONGODb with the powerful library React.js. 
                    My goal is to take all the knowledge I have gained from college and the full stack bootcamp and take those tools to 
                    apply my years of problem-solving and translate it to all work in the Full Stack industry.
                    </p>
                    <p>My hobbies include playing video games on my computer, continuing learning how to be a future full stack developer, and spending time with my family. 
                    I enjoy watching professional played video games such as: CSGO, LOL, Smite, and Rainbow Siege. I also enjoy traditional sports,
                    my favorite teams are: Chicago Cubs and White Sox in the MLB, Notre Dame Fighting Irish in college football, and Chicago Blackhawks in hockey.  
                    </p>
                </div>
            </div>
            <div className="row pt-3"></div>
        </div>
    );
}

export default About;