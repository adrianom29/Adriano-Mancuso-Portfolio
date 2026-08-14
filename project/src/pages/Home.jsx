import Infobubble from "../components/infobubble.jsx"
import Space from "../components/Space.jsx"

function Home () {
    return <>
        <header> 
            <button class = "buttonOnSite" title = "Go to Home page"> Home </button>
            <a href = "/contact-me"> 
                <button title = "Go to Contact Me page"> Contact Me </button>
            </a>
            <br />
        </header>

        <br />
        <br />
        <br />
        <h1 class="centeredHeader">I'm Adriano Mancuso</h1>

        {/* ABOUT ME SECTION*/}

        <Space/>
        <h1 class="centeredHeader">About Me</h1>
        <p class = "aboutMe"><center>Hello! My name is Adriano Mancuso and I am interested in an internship opportunity for the Fall 2026 and Winter 2027 terms. 
            I am searching for a role where I can be challenged and given an opportunity to use and grow my existing skills while creating new ones. I am excited 
            to gain valuable industry knowledge from experienced team members. I am beginning my third year of my undergraduate honors degree studying Computer 
            Science at York University. I have a passion for software development and have experience with full stack projects which includes building this very 
            website. You can find multiple ways to reach me in the Contact Me page in the header.</center></p>
        {/* EDUCATION SECTION */}

        <Space/>
        <h1 class = "titleHome">Education:</h1>
        
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "education",
                title: "York University, Toronto, ON:",
                text: (
                    <>
                    <p> Computer Science BA, Honours - Third Year</p>
                    <p>GPA: 6.80/9.00 ≈ 3.02/4.00</p>
                    </>
                )
            }}/>

            <Infobubble info = {{
                type: "education",
                title: "Notable Coursework:",
                text: "Advanced Object Oriented Programming, Data Structures & Algorithms, Software Tools, Computer Organization, Discrete Mathematics"
            }}/>
        </div>

        {/* SKILLS SECTION */}

        <Space/>
        <h1 class = "titleHome">Skills:</h1>
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "skill", 
                title: "Programming Languages:",
                text: " Java, Python, JavaScript, TypeScript, HTML/CSS, SQL, C/C++, Bash,  Risc-V Assembly"
            }}/>
            <Infobubble info = {{
                type: "skill", 
                title: "Frameworks and Libraries:",
                text: "  React.js, NetworkX, Next.js, Flask, FastAPI, Leaflet.js"
            }}/>
        </div>
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "skill",
                title: "Tools and Platforms:",
                text: "Git/Github, Pandas, AWS, JUnit, Visual Studio Code, Eclipse IDE, Claude Code"
            }}/>
            <Infobubble info = {{
                type: "skill",
                title: "Concepts and Specializations:",
                text: "API Development, OOP, Full Stack Development, Algorithm Design, UML Design AI/ML, Dijkstra’s Algorithm, Prompt Engineering"
            }}/>    
        </div>
        
        {/* PROJECTS SECTION */}

        <Space/>
        <h1 class = "titleHome">Projects:</h1>
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "project",
                title: "AI Music Discovery (Full Stack Web Application) - In Progress...", 
                text: "Custom built and trained AI model that recommends user new artists based on their top listened to Spotify artists. Built in TypeScript and Python and utilizes Spotify and Last.fm APIs.",
                url: "https://drive.google.com/file/d/1vDmLv1h6fp1rgUCh6HMPfxigWM2rCL6i/view",
                linkText: "Check out a demo here!"
            }}/>
        </div>
        
        <div class = "IBgroup">
            <Infobubble info = {{
                type: "project",
                title: "Get Around Campus (Full Stack Web Application)", 
                text: "Navigation web app for 10 different Ontario Universities. Built with data from OpenStreetMap.org and Dijkstra's algorithm to compute shortest path between any two locations on any selected campus.",
                url: "https://adrianom29.pythonanywhere.com/",
                linkText: "Check it out here!"
            }}/>
            <Infobubble info = {{
                type: "project",
                title: "Portfolio Website (Full Stack Website)", 
                text: "This website you are currently on! Built with JavaScript, HTML, and CSS with React.js. Consists of work experience, projects, personal achievements, and various methods of contact."
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
                        <li>Processed all transactions, including registrations and payments, with high accuracy using the POS system.</li>
                        <li>Facilitated weekly program registrations for participants while maintaining accurate customer and program information to ensure smooth operations.</li>
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
                        <li>Developed leadership skills by conducting classes following lesson plans while maintaining engagement for classes ranging from 1-10 students.</li>
                        <li>Worked in a team of 5 other counselors to organize group activities while maintaining a safe environment for group sizes of over 20 campers.</li>
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
