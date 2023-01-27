import './about.scss'
import img from '../images/html.png'
import img2 from '../images/css.png'
import img3 from '../images/js.png'
import img4 from '../images/react.png'
import img5 from '../images/git.png'
import img6 from '../images/mui.png'
import img7 from '../images/bootstrap.png'

const About=()=>{
    return(
        <section className='aboutwrapper'>
            <div className='aboutsection' id='about'>
                <div className='aboutdiv'>
                    <h1 className='aboutme' >About me</h1>
                    <p className='aboutp'>My name is Abdi Aden . I am a self taught developer who loves codeing focused on making beautiful , functional and scalable websites . My favourite language is Javascript . I have spent the last few months learning these technologies.</p>
                </div>
                <div className='skillsdiv'>
                    <div className='skillsh1div'>
                       <h1 className='skillh1' >Skills</h1>
                    </div>
                    <div className='allicons'>
                        <div className='iconsside1'>
                            <div className='icondiv'>
                                <img src={img} className="icons"></img>
                                <p >Html</p>
                            </div>
                            <div className='icondiv'>
                                <img src={img2} className="icons"></img>
                                <p >Css</p>
                            </div>
                            <div className='icondiv'>
                                <img src={img3} className="icons"></img>
                                <p >Javascript</p>
                            </div>
                            <div className='icondiv'>
                                <img src={img4} className="icons"></img>
                                <p >React</p>
                            </div>
                        </div>
                        <div className='iconsside2'>
                            <div className='icondiv'>
                                <img src={img5} className="icons"></img>
                                <p >Git</p>
                            </div>
                            <div className='icondiv'>
                                <img src={img6} className="icons"></img>
                                <p >Mui</p>
                            </div>
                            <div className='icondiv'>
                                <img src={img7} className="icons"></img>
                                <p >Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}
export default About