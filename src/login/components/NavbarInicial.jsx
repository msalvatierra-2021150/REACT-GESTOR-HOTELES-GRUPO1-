import logo from "../../img/logo.svg"
import dark from "../../img/dark-mode.svg";
import barras from "../../img/barras.svg";
import { useState } from "react";

export const NavbarInicial = () => {
    const [isOn, setIsOn ] = useState(false);

    function navegacionResponsive() {
      setIsOn(!isOn);
    }

    return (
        <>
                    <header className="header">
                    <div className="contenedor contenido-header">
                      <div className="barra">
                        <a href="/index.html">
                          <img src={logo} alt="logotipo de Hotel Vago" />
                        </a>
                        <div className="mobile-menu" onClick={navegacionResponsive}>
                          <img src={barras}/>
                        </div>
                        <div className="derecha">
                          <img className="dark-mode-boton" src={dark} />
                          <nav className={isOn ? "navegacion mostrar" : "navegacion"}>
                            <a href="#">Reservar</a>
                            <a href="#">Nosotros</a>
                            <a href="#">Contacto</a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </header>  
        </>
    )
}
