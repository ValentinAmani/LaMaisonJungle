import '../styles/Banner.css'
// Déclare une variable logo à laquelle on assigne le contenu de notre image
import logo from '../assets/logo.png'

function Banner() {
    const title = "La maison jungle"
    return (
        <div className="lmj-banner">
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{ title }</h1>
        </div>
    )
}

// Epargne d'utiliser les accolades au moment de l'import
export default Banner
