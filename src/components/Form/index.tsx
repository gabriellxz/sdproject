import './style.css'
import standShow from '../../assets/standshow.png'
import CampoEmail from '../CampoEmail'
import CampoSenha from '../CampoSenha'

export default function Form() {
    return (
        <div className="container">
            <div className='container-form'>
                <div className='container-form-img'>
                    <div className='container-img'>
                        <img src={standShow} alt="standShow" />
                    </div>
                </div>
                <form className='form'>
                    <div className='header-form'>
                        <h2>Login</h2>
                        <img src={standShow} alt="standShow" className='img-mobile'/>
                    </div>
                    <div className='container-input'>
                        <div className='box-input'>
                            <span>Email</span>
                            <CampoEmail />
                        </div>
                        <div className='box-input'>
                            <span>Senha</span>
                            <CampoSenha />
                        </div>
                    </div>
                    <button className='btn-login'>
                        Acessar
                    </button>
                    <p>
                        Não possui uma conta? <a href="#">Criar</a>
                    </p>
                </form>
            </div>
        </div>
    )
}