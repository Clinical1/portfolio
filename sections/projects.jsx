import './projects.scss'
import Website from '../components/website'
import img1 from '../images/gym.png'
import img2 from '../images/anime.png'
import img3 from '../images/travel.png'
import img4 from '../images/home.png'

const Projects=()=>{
    const gymtext = "Choose a bodypart and see which exerises to use"
    const animetext ="search which anime you want to watch using anime api"
    const traveltext ="Type which contry you want to get information from"
    const hometext="Showcase of diffrent house and rent prices"

    return(
        <section className='prosection'id='projects'>
            <div className='prodiv'>
               <h1 className='mypro'>My projects</h1>
            </div>
            <div className='webcontainer'>
                <Website view={'https://clinical1.github.io/gym/'} name="London gym" lang={"React / Scss / Mui"} source="https://github.com/Clinical1/gym" img={img1} text={gymtext}/>
                <Website view={'https://clinical1.github.io/Animesfree/'} name="Animesfree" lang={"React / Scss "} source="https://github.com/Clinical1/Animesfree" img={img2} text={animetext}/>
                <Website view={' https://clinical1.github.io/Travels/'} name="Travels" lang={"React / Scss "} source="https://github.com/Clinical1/Travels" img={img3} text={traveltext}/>
                <Website view={'https://clinical1.github.io/property-website/'} name="Homes" lang={"Html / Css / Js"} source="https://github.com/Clinical1/property-website" img={img4} text={hometext}/>
            </div>
        </section>
    )
}
export default Projects