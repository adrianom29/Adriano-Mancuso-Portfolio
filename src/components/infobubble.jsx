function Infobubble({info}){

    return<>
        <div class = "infobubble">
            <h2> {info.title} </h2>
            <p2> {info.text} </p2>
            <a href={info.url}>{info.linkText}</a>
        </div>
    </>
}

export default Infobubble