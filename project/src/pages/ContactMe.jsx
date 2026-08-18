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
            <a href = "/"> 
                <button title = "Go to Home page">Home</button>
            </a>
            <button class = "buttonOnSite" title = "Go to Contact Me page">Contact Me</button>
            <br />
        </header>

        <br />
        <br />
        <br />
        <div class="contactGroup">
            <Contact info={{
                name: "Email",
                image: EmailImg,
                text: (
                    <a href="mailto:adriano.mancuso2906@gmail.com">adriano.mancuso2906@gmail.com</a>
                )
            }}/>

            <Contact info={{
                name: "Phone",
                image: PhoneImg,
                text: "(647)-615-4425"
            }}/>

            <Contact info={{
                name: "LinkedIn",
                image: LinkedInImg,
                link: "https://www.linkedin.com/in/adriano-mancuso-934156327/",
                text: "Adriano Mancuso"
            }}/>
        </div>

        <div class = "contactGroup">
            <Contact info={{
                name: "GitHub",
                image: githubImg,
                link: "https://github.com/adrianom29",
                text: "adrianom29"
            }}/>

            <Contact info={{
                name: "Resume",
                image: ResumeImg,
                link: "https://docs.google.com/document/d/1CsCU_q_aSyDNgRjfYsdRR8ujCtYHWNTwkmiJl0lzMmA/edit?tab=t.0",
                text: "Link to Resume"
            }}/>
        </div>
        
        <Space></Space>

    </>
}

export default ContactMe
