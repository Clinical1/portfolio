import './website.scss'

const website=({view,img,name,lang,source,text})=>{
    return(
        <div className='box1'>
            <div className='webdiv'>
                <img className='webimg' src={img}></img>
                <h1 className='h1web'>{name}</h1>
                <p className='webused'>{lang}</p>
                <p className='webp'>{text}</p>
                <div className='webbtndiv'>
                    <a href={view} target="_blank"><button className='webbtn'>View</button></a>
                    <a href={source} target="_blank" ><button className='webbtn'>Source</button></a>
                </div>
            </div>
        </div>
    )
}
export default website