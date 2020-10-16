import React from "react";
import Wrapper from "../components/Wrapper/index"
import Projects from "../components/Project/Portfolio"

function Portfolio(){
    return(
        //pictures and titles for programs in portfolio
        <div className="container">
           <h1 class="text-white border-bottom border-light">Portfolio</h1>

           <div class="row">
                <div class="p-4 col-md-6">
                    <img src="assets/images/bartender.PNG" style="height:245px; width: 500px;" alt="8-bit-bartender" class="img-fluid" />
                    <div class="text-center">
                        <h2 class="text-center">8-bit-bartender</h2>
                        <a href="https://eelektrick.github.io/8-bit-bartender/" class="text-light link">Website</a>
                        {/* <!-- link trigger modal All modals were taken from bootstrap examples--> */}
                        <a href="#" data-toggle="modal" data-target="#exampleModal1" class="p-4 m-5 text-light link">Information</a>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">8-bit-bartender</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        This app helps an individual who likes to drink mixed drinks but wants to be healthy to give updated information on 
                                        the ingredients and their nutritional info per mixed drink.<br />
                                        This app used moment.js to display a retro clock in real time. Used basic HTML, CSS, and Javascript. 
                                        The app used two different frameworks besides bootstrap to make the app responsive at 
                                        all sizes but phone app size first in mind. Also used API calls in javascript to
                                        call in the information needed for the ingredients and nutritional info for the mixed drinks.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Eelektrick/8-bit-bartender" class="text-light link">Github</a>
                    </div>
                </div>

                <div class="p-4 col-md-6">
                    <img src="assets/images/finalConcept.png" style="height:245px;" alt="flix-nut" class="img-fluid" />
                    <div class="text-center">
                        <h2 class="text-center">Flix-Nut</h2>
                        <a href="https://flix-nut.herokuapp.com/" class="text-light link">Website</a>
                        {/* <!-- link trigger modal --> */}
                        <a href="#" data-toggle="modal" data-target="#exampleModal2" class="p-4 m-5 text-light link">Information</a>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Flix-Nut</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Phone app for an individual to give ratings for movies watched, another version of IMDB. However, this app is different as
                                        the rating of the movie is not given until the user gives a rating to avoid other users ratings effecting a more honest rating.<br />
                                        Future plans would include more information and escription of each movie as well and share on social media.
                                        Used bootstrap to make the app for phone screen size first but be still be used on a computer, API calls for the movie information
                                        and ratings. Used basic HTML, CSS, and Javascript. Used MySql to save users email and passwords to log in.<br />
                                        email: usertest@email.com<br />
                                        password: 1234
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Eelektrick/flix-nut" class="text-light link">Github</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="p-4 col-md-6">
                    <img src="assets/images/dashboard.PNG" alt="Weather-dashboard" class="img-fluid" />
                    <div class="text-center">
                        <h2 class="text-center">Weather-dashboard</h2>
                        <a href="https://eelektrick.github.io/weather-dashboard/" class="text-light link">Website</a>
                        {/* <!-- link trigger modal --> */}
                        <a href="#" data-toggle="modal" data-target="#exampleModal3" class="p-4 m-5 text-light link">Information</a>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Weather-dashboard</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        User wants to check the weather of the current day and the next five day forecast, only needs to enter the city desired
                                        in the search bar.<br />
                                        Used basic HTML, CSS, and Javascript. Used local storage to save recent search city names if not a database is available.
                                        Used AJAX and API call to search and find the city weather typed in for the user. Used moment.js to shopw the current
                                        month, day, and year.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Eelektrick/weather-dashboard" class="text-light link">Github</a>
                    </div>
                </div>

                <div class="p-4 col-md-6">
                    <img src="assets/images/screenshot.PNG" alt="burger" class="img-fluid" />
                    <div class="text-center">
                        <h2 class="text-center">Gluttony-of-Burgers</h2>
                        <a href="https://gluttony-of-burgers.herokuapp.com/" class="text-light link">Website</a>
                        {/* <!-- link trigger modal --> */}
                        <a href="#" data-toggle="modal" data-target="#exampleModal4" class="p-4 m-5 text-light link">Information</a>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Gluttony-of-Burgers</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        User can list and save the burger they want to make and eat. After the user eats the burger the user can click
                                        on the devour it button to store the burger in the eaten/devoured list.<br />
                                        Used basic HTML, CSS, and Javascript. Used MySQL to save the burger create and if it was devoured or not.
                                        Used handlebars to create the webpage design. Used express with express handlebars and, 
                                        used server.js and package.json to run code on heroku.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Eelektrick/burger" class="text-light link">Github</a>
                    </div>
                </div>  
            </div>

            <div class="row">
                <div class="p-4 col-md-6">
                    <img src="assets/images/scheduler.PNG" alt="work day scheduler" class="img-fluid" />
                    <div class="text-center">
                        <h2 class="text-center">Work day scheduler</h2>
                        <a href="https://eelektrick.github.io/work-day-scheduler/" class="text-light link">Website</a>
                        {/* <!-- link trigger modal --> */}
                        <a href="#" data-toggle="modal" data-target="#exampleModal5" class="p-4 m-5 text-light link">Information</a>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Work day scheduler</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        A daily work schedule the user enters info on a hourly basis what their schedule will be for the day.
                                        Each hour changes the hours colored bar to indicate when the time has passed or yet to come.<br /> 
                                        Used basic HTML, CSS, and Javascript. Used Moment.js to keep track what the current time and date is.
                                        Used local storage to save the infomation entered in the schedule.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Eelektrick/work-day-scheduler" class="text-light link">Github</a>
                    </div>
                </div>

                <div class="p-4 col-md-6">
                    <img src="assets/images/notes.PNG" alt="note-taker" class="img-fluid" />
                    <div class="text-center">
                        <h2 class="text-center">Note-Taker</h2>
                        <a href="https://notetaker-11.herokuapp.com/" class="text-light link">Website</a>
                        {/* <!-- link trigger modal --> */}
                        <a href="#" data-toggle="modal" data-target="#exampleModal6" class="p-4 m-5 text-light link">Information</a>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Note-Taker</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Note taker allows the user to enter and delete notes asnd have the titles saved to the side to re enter old notes.<br />
                                        Used basic HTML, CSS, and Javascript. Used routes to connect to the different API calls and html pages to be able
                                        to save the information and change from the greeting page to the notes taking area. Used server.js with express
                                        with package.json to connect to heroku.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Eelektrick/Note_Taker" class="text-light link">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;