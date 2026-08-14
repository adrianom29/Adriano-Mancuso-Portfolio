import EmailImg from "../images/email.webp"
import PhoneImg from "../images/phone.png"
import LinkedInImg from "../images/linkedIn.png"
import githubImg from "../images/github.png"
import ResumeImg from "../images/paper.png"

import Space from "../components/Space.jsx"
import Contact from "../components/contact.jsx"


function ContactMe () {
    return <>
        <header> 
            
            <div class = "headDiv">
                <a href = "/"> 
                    <button class = "buttons" title = "Go to Home page"> Home </button>
                </a>
                <button class = "buttonOnSite" title = "Go to Contact Me page"> Contact Me </button>
            </div>
            <br />
        </header>

        <br />
        <br />
        
        <Contact info={{
            name: "Email",
            image: EmailImg,
            text: (
                <>
                <p><b>Personal Email:</b></p>
                <p> adriano.mancuso2906@gmail.com </p> 
                </>
            )
        }}/>

        <Contact info={{
            name: "Phone",
            image: PhoneImg,
            text: (
                <>
                <p> <b>Phone Number:</b></p>
                <p>(647)-615-4425</p>  
                </> 
            )
        }}/>

        <Contact info={{
            name: "LinkedIn",
            image: LinkedInImg,
            link: "https://www.linkedin.com/in/adriano-mancuso-934156327/",
            text: "Adriano Mancuso"
        }}/>

        <Contact info={{
            name: "GitHub",
            image: githubImg,
            link: "https://github.com/adrianom29",
            text: "adrianom29"
        }}/>

        <Contact info={{
            name: "Resume",
            image: ResumeImg,
            link: "https://drive.google.com/file/d/1wmHuambHHoWuclxbYjLAdFyiIaHNMil5/view",
            text: "Link to Resume"
        }}/>

    </>
}

export default ContactMe
