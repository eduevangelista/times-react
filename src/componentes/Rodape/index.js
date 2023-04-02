import './rodape.css'
import {AiFillGithub} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://github.com/eduevangelista" target="_blank" rel="noreferrer" >
                    <AiFillGithub/>  
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/eduardo-evangelista-20b257201/" target="_blank" rel="noreferrer">
                    <ImLinkedin/>
                </a>
            </li>
           
        </ul>
       </section>
       
       <section>
        <p>
            Desenvolvido por Eduardo.
        </p>
       </section>
    </footer>)
}

export default Rodape