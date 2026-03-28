import Infobubble from "../components/infobubble.jsx"
import Space from "../components/Space.jsx"

function Home () {
    return <>
        <header> 
            <div class = "headDiv">
                <button class = "buttonOnSite" title = "Go to Home page"> Home </button>
                <a href = "/contact-me"> 
                    <button class = "buttons" title = "Go to Contact Me page"> Contact Me </button>
                </a>
            </div>
            <br />
        </header>

        <br />
        <br />

        <h1 class = "hello"><center>I'm Adriano Mancuso</center></h1>

        {/* ABOUT ME SECTION*/}

        <Space/>
        <h1><center>About Me</center></h1>
        <p class = "aboutMe">Hello! My name is Adriano Mancuso and I am interested in an internship opportunity for the Summer 2026 term. I am searching for a role where I can be challenged and 
            given an opportunity to grow my existing skills as well as create new ones. I am excited to gain valuable industry knowledge from experienced team members. Currently, I am 
            participating in my second year of my undergraduate degree studying Computer Science at York University. I have a passion for software development and have experience with full stack 
            projects which includes building this very website. Aside from school and programming, I am interested in enjoying a diverse collection of music and movies as well as learning new 
            technologies and ideas. </p>

        {/* EDUCATION SECTION */}

        <Space/>
        <h1 class = "titleHome">Education:</h1>
        
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "education",
                title: "York University, Toronto, ON",
                text: "Computer Science BA, Honours - Second Year",
            }}/>
        </div>

        {/* SKILLS SECTION */}

        <Space/>
        <h1 class = "titleHome">Skills:</h1>
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "skill", 
                title: "Programming Languages:",
                text: "Java, Python, C, HTML/CSS, Javascript"
            }}/>
            <Infobubble info = {{
                type: "skill",
                title: "Notable Courses:",
                text: "Advanced Object Oriented Programing, Integral Calculus, Data Structures & Algorithms, Software Tools, Discrete Math"
            }}/>
            <Infobubble info = {{
                type: "skill",
                title: "Developer Tools:",
                text: "Git, Github, JUnit for Java, React.js"
            }}/>
        </div>
        
        {/* PROJECTS SECTION */}

        <Space/>
        <h1 class = "titleHome">Projects:</h1>

        <div class = "IBgroup">
            <Infobubble info = {{
                type: "project",
                title: "Portfolio Website (Full Stack Website)", 
                text: "This website you are currently on! Implements JavaScript, HTML, and CSS with React.js. Consists of work experience, projects, personal achievements, and various methods of contact."
            }}/>

            <Infobubble info = {{
                type: "project",
                title: "Flying Knife Game (Java Project):", 
                text: "Navigate a flying knife through an obstacle course, slice the objects for points. Created entirely using Java, implements graphics, object oriented programming, collisions, algorithms, and more."
            }}/>
        </div>

        {/* WORK EXPERIENCE */}

        <Space/>
        <h1 class = "titleHome">Work Experience:</h1>

        <div class = "IBgroup">
            <Infobubble info={{
                type: "work",
                title: "Recreation Facility Receptionist | City of Richmond Hill",
                text: (
                    <>
                    <b>Jun 2025 - Present: </b>
                    <br />
                    <ul class = "bulletPoints">    
                        <li>Provided customer services to community by accurately handling program registrations, payments, and customer inquiries with professionalism</li>
                        <li>Developed organizational skills by keeping track of customer and program information</li>
                        <li>Communicated with other members of staff to ensure that daily operations would run without any issue</li>
                    </ul> 
                    </>
                )
            }}/>
            <Infobubble info={{
                type: "work",
                title: "Private Math Tutor | Self Employed",
                text: (
                    <>
                    <b>Oct 2024 - Present: </b>
                    <br />
                    <ul class = "bulletPoints">
                        <li>Delivered structured and concise instructions to students from grades 9-12 focusing on heightening critical thinking skills</li>
                        <li>Developed communication skills by adapting to varying learning styles, utilizing different teaching strategies</li>
                    </ul> 
                    </>
                )
            }}/>
        </div>

        <div class= "IBgroup">
            <Infobubble info={{
                type: "work",
                title: "Swimming Instructor | City of Vaughan",
                text: (
                    <>
                    <b>Jan 2022 - Jan 2024: </b>
                    <br />
                    <ul class = "bulletPoints">
                        <li>Developed leadership skills by conducting a class following a lesson plan while maintaining engagement</li>
                        <li>Clearly communicated learning progress and concerns to students, parents and guardians</li>
                        <li>Includes work as a member of a team of camp counselors for a summer</li>
                    </ul>  
                    </>
                )
            }}/>
        </div>
        
        

    <br />
    <br />

    </>
 
}

export default Home
