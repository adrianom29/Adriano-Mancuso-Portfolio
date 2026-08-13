function Infobubble({info}){

    return<>
        <div class = "infobubble">
            <h2> {info.title} </h2>
            <p> {info.text} </p>
            <a href={info.url}>
                <br /> 
                <b>{info.linkText}</b>
            </a>
        </div>
    </>
}

export default Infobubble

/*
example:

<Infobubble info = {{
    type: "project",
    title: "Get Around Campus (Full Stack Web Application)", 
    text: "Navigation web app for 10 different Ontario Universities. Built with data from OpenStreetMap.org and Dijkstra's algorithm to compute shortest path between any two locations on any selected campus.",
    url: "https://adrianom29.pythonanywhere.com/",
    linkText: "Check it out here!"
}}/>

*/