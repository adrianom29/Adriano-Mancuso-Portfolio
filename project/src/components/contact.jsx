function Contact({info}){

    return <>
        <div class = "contact">
            <a href={info.link} target = "_blank">
                <img src={info.image} alt={info.name} class = "contactImage"/>
            </a>
            <div>
                <p class = "contactTitle"><b>{info.name}:</b></p>
                <a href={info.link} target = "_blank"> {info.text}</a>
            </div>
        </div>
    </>
}

export default Contact

/*
example:

<Contact info={{
    name: "LinkedIn",
    image: {LinkedInImg},
    link: "https://www.linkedin.com/in/adriano-mancuso-934156327/",
    text: "Adriano Mancuso"
}}/>

*/