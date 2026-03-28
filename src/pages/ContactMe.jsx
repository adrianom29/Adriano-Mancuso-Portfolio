import Email from "../images/email.webp"
import Phone from "../images/phone.png"
import LinkedIn from "../images/linkedIn.png"
import github from "../images/github.png"
import Space from "../components/Space.jsx"

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
        <div class = "CMdiv">
            <img src = {Email} alt = "Email" class = "CMimage"/>
            <div>
                <p class = "titleCM"><b>Personal Email:</b></p>
                <p> adriano.mancuso2906@gmail.com </p> 
            </div>
        </div>

        <Space/>

        <div class = "CMdiv">
            <img src= {Phone} alt = "Phone" class = "CMimage"/>
            <div>
                <p class = "titleCM"> <b>Phone Number:</b></p>
                <p>(647)-615-4425</p>
            </div>
        </div>
        
        <Space/>

        <div class = "CMdiv">
            <img src= {LinkedIn} alt = "LinkedIn" class = "CMimage"/>
            <div>
                <p class = "titleCM"><b>LinkedIn:</b> </p>
                <a href="https://www.linkedin.com/in/adriano-mancuso-934156327/" target = "_blank"> Adriano Mancuso</a>
            </div>
        </div>

        <Space/>

        <div class = "CMdiv">
            <img src= {github} alt = "GitHub" class = "CMimage"/>
            <div>
                <p class = "titleCM"><b>GitHub:</b> </p>
                <a href="https://github.com/adrianom29" target = "_blank"> adrianom29</a>
            </div>
        </div>

        <Space/>
    </>
}

export default ContactMe
