import React, { Component } from 'react'
import Project from './Project'
import LocationChat from '../images/LocationChat.PNG'
import Hack from "../images/hacker-news-Next.PNG"
import party from "../images/party.PNG"
import Simpsons from "../images/simpsons.PNG"



export default class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            projects: [
                {
                    image: LocationChat,
                    title: "Chat Maps",
                    content: "After never using React Native before, I was able to build an entire Android app that allows you to join location based chatrooms if you are within their preset range.  We implemented several APIs here, including SendBird (for messaging), Google Maps, and oAuth.  The most challenging aspect of this project was just learning React Native along the way.  We succeeded and have built a fully functional application.",
                    githubLink: "https://github.com/labs13-location-chat/mobile/tree/development",
                    deployedLink: "",
                    misc: ""
                },
                {
                    image: Hack,
                    title: "Hacker News Clone with NextJS",
                    content: "Cloned hacker news using NextJS.  Built out the layout for the site and used proper routing techniques.  Fetched all required data using isomorphic-fetch.  Was able to dynamically display all data provided by the API.",
                    githubLink: "https://github.com/jvgiv/next-hackernews/tree/john-gibbons",
                    deployedLink: "",
                    misc: ""
                },
                {
                    image: party,
                    title: "Party Planner",
                    content: "Created a complete backend from table design upwards.  Was responsible for designing the backend for a team build project.  Worked with migrations and seeding to create the initial tables.  CRUD operation routes and functions were designed to make the data easily accessible to the front end developer.  Authentication methods were used here.  Middleware was created that gives the user a token that is comprised of an id, a secret, and a role.",
                    githubLink: "https://github.com/party-planner-build-week/party_be/tree/john-gibbons",
                    deployedLink: "https://party-planner-john.herokuapp.com/",
                    misc: "https://documenter.getpostman.com/view/7147921/S1TPb1N3?version=latest"
                },
                {
                    image: Simpsons,
                    title: "Simpsons' Says",
                    content: "Built a front end application to handle all of the CRUD operations from a server that a backend developer built for the same project.  This project was a coordinated effort and showcased our ability to work together in a team environment.  This is a fully functional site that allows you to register, log in, search for Simpsons quotes, save said quotes, and even generate quotes from select characters that were programmed through an algorithm to be things that the characters might say.  This app was built using React with Redux.",
                    githubLink: "https://github.com/simpson-says/buildweek3-simpsons-says-fe/tree/john-gibbons",
                    deployedLink: "https://simpsonssays.netlify.com/",
                    misc: ""
                }
                // {
                //     image: "../../images/",
                //     title: "",
                //     content: "",
                //     githubLink: "",
                //     deployedLink: "",
                //     misc: ""
                // },
                // {
                //     image: "../../images/",
                //     title: "",
                //     content: "",
                //     githubLink: "",
                //     deployedLink: "",
                //     misc: ""
                // },
                // {
                //     image: "../../images/",
                //     title: "",
                //     content: "",
                //     githubLink: "",
                //     deployedLink: "",
                //     misc: ""
                // },
                // {
                //     image: "../../images/",
                //     title: "",
                //     content: "",
                //     githubLink: "",
                //     deployedLink: "",
                //     misc: ""
                // },
                // {
                //     image: "../../images/",
                //     title: "",
                //     content: "",
                //     githubLink: "",
                //     deployedLink: "",
                //     misc: ""
                // },
            ]
        }
    }
    
    render() {
        return (
            <div>
                {this.state.projects.map((eachPro, index) => {
                    return <Project key={index} project={eachPro} />
                })}
            </div>
        )
    }
}
