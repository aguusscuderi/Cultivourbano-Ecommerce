import { render } from '@testing-library/react'
import '../css/style.css'
import banner from '../../imagenes/cultivourbano_banner.png'



function NavBar (){
    const slide = (e) => {
        const menu = document.querySelector('.mobile__nav-container')
        const links = document.querySelectorAll('.navLink')
        const blocked = document.querySelector('.blocked')

                if(blocked){
                    menu.style.transform = "translateY(-900px)"
                    menu.classList.remove('blocked')
                    links.forEach(el => {
                        el.style.animation = ''
                    })
                    e.currentTarget.classList.remove('toggle')
                }else{
                    menu.style.transform = "translateY(11px)"
                    menu.style.opacity = "1"
                    menu.classList.add('blocked')
                    links.forEach((el, index) => { 
                        el.style.animation = `navLinkFade 0.2s ease forwards ${index / 7+1}s`     
                    })
                    e.currentTarget.classList.toggle('toggle')
                }    
    }
    
    render()
    return (
        <>
        <div className="banner_container">
            <img src={banner} alt=""/>
        </div> 
        <nav>
            <div className="user_info">
                <i className="fas fa-shopping-cart"><div className="prod_counter"></div></i>
                <i className="fas fa-user"></i>
            </div>
            <div onClick={slide} className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="mobile__nav-container mb__nav-container-visible">
                <ul className="flex__ul">
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i class="fas fa-home"></i> Inicio  </a> </li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-question-circle"></i> Quienes somos </a> </li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-store"></i> Productos </a></li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-users"></i>  Contactanos  </a> </li>
                    <li className="flex__li-item"> <a href=" " className="navLink"> <i className="fas fa-home"></i> Sucursales </a> </li>
                </ul>
            </div>
        </nav>
        </>
    )
    
}

export default NavBar;