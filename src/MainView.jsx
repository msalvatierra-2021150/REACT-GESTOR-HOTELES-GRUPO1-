import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./img/logo.svg"
import dark from "./img/dark-mode.svg";
import westin from "./img/westin.jpg";
import barcelo from "./img/barcelo.jpg";
import hilton from "./img/hilton.jpeg";
import tikal from "./img/tikal.jpg";
import icono1 from "./img/icono1.svg";
import icono2 from "./img/icono2.svg";
import icono3 from "./img/icono3.svg";
import { SearchHotel } from './home/hoteles/components/SearchHotel';

export const MainView = () => {
  return (
    <>
    <header className="header inicio">
      <div className="contenedor contenido-header">
        <div className="barra">
          <a href="#">
            <img src={logo} alt="logotipo de Hotel Vago" />
          </a>
          <div className="mobile-menu">
            <img src="/build/img/barras.svg" alt="Logotipo de Hotel Vago" />
          </div>
          <div className="derecha">
          <img className="dark-mode-boton" src={dark} />
            <nav className="navegacion">
              <a href="#">Nosotros</a>
              <Link to="/hoteles-lista">Reservar ahora</Link>
              <a href="#">Contacto</a>
              <Link to="/login">Login</Link>
            </nav>
          </div>
        </div>
        <h1>¿Necesitas un lugar dónde alojarte? Déjanos echarte una mano.</h1>
      </div>
    </header>
    <main className="contenedor seccion">
      <h1>Más sobre Nosotros</h1>
      <div className="iconos-nosotros">
        <div className="icono">
          <img
            src={icono1}
            alt="Icono seguridad"
            loading="lazy"
          />
          <h3>Seguridad</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic
            accusantium harum omnis, minus sed id ut atque nihil blanditiis
            aliquid, similique molestiae nam pariatur, inventore sit error
            aperiam sunt?
          </p>
        </div>
        <div className="icono">
          <img src={icono2} alt="Icono Precio" loading="lazy" />
          <h3>Precio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic
            accusantium harum omnis, minus sed id ut atque nihil blanditiis
            aliquid, similique molestiae nam pariatur, inventore sit error
            aperiam sunt?
          </p>
        </div>
        <div className="icono">
          <img src={icono3} alt="Icono tiemo" loading="lazy" />
          <h3>Tiempo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic
            accusantium harum omnis, minus sed id ut atque nihil blanditiis
            aliquid, similique molestiae nam pariatur, inventore sit error
            aperiam sunt?
          </p>
        </div>
      </div>
    </main>

    <section className="seccion contenedor">
      <h2>Hoteles más populares de Guatemala</h2>
      <div className="contenedor-anuncios">
        <div className="anuncio">
          <img
            loading="lazy"
            src={westin}
            alt="anuncio"
          />
          <div className="contenido-anuncio">
            <h3>The Westin Camino Real</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              dapibus ornare quam, sit amet varius dui volutpat eu. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Morbi auctor vulputate diam, nec vestibulum enim
              vehicula quis.
            </p>
            <a href="#?id=1" className="boton boton-amarillo-block"
              >Ver Hotel</a
            >
          </div>
        </div>
        <div className="anuncio">
        <img
            loading="lazy"
            src={barcelo}
            alt="texto Entrada Blog"
        />
          <div className="contenido-anuncio">
            <h3>Barceló Guatemala City</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              dapibus ornare quam, sit amet varius dui volutpat eu. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Morbi auctor vulputate diam, nec vestibulum enim
              vehicula quis. 
            </p>
            <a href="#?id=2" className="boton boton-amarillo-block"
              >Ver Hotel</a
            >
          </div>
        </div>
        <div className="anuncio">
          <img
            loading="lazy"
            src={hilton}
            alt="anuncio"
          />
          <div className="contenido-anuncio">
            <h3>Hilton Guatemala City</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              dapibus ornare quam, sit amet varius dui volutpat eu. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Morbi auctor vulputate diam, nec vestibulum enim
              vehicula quis. 
            </p>
            <a href="#?id=3" className="boton boton-amarillo-block"
              >Ver Hotel</a
            >
          </div>
        </div>
      </div>
      <div className="alinear-derecha">
        <a href="#" className="boton-verde">Ver Todos</a>
      </div>
    </section>

    <section className="imagen-contacto">
      <h2>Encuentra el hotel de tus sueños</h2>
      <p>
        Llena el formulario de contacto y un asesor se pondra en contacto contigo
      </p>
      <a href="#" className="boton-amarillo">Contacto</a>
    </section>

    <div className="contenedor seccion seccion-inferior">
      <section className="blog">
        <h3>Nuestro Blog</h3>
        <article className="entrada-blog">
          <div className="imagen">
            <picture>
              <img
                loading="lazy"
                src={hilton}
                alt="texto Entrada Blog"
              />
            </picture>
          </div>
          <div className="texto-entrada">
            <a href="#">
              <h4>Visita el hotel Hilton GT</h4>
              <p className="informacion-meta">
                Escrito el: <span>20/10/2021</span> por: <span>Admin</span>
              </p>
              <p>
                Consejos para construir tu casa con los mejores materiales y
                ahorrando dinero
              </p>
            </a>
          </div>
        </article>

        <article className="entrada-blog">
          <div className="imagen">
            <picture> 
              <img
                loading="lazy"
                src={tikal}
                alt="texto Entrada Blog"
              />
            </picture>
          </div>
          <div className="texto-entrada">
            <a href="#">
              <h4>Visita el hotel Grand Tikal</h4>
              <p className="informacion-meta">
                Escrito el: <span>20/10/2021</span> por: <span>Admin</span>
              </p>
              <p>
                Maximiza el espacio en tu hogar con esta guia, aprende a
                combinar muebles y colores para darle vida a tu espacio
              </p>
            </a>
          </div>
        </article>
      </section>

      <section className="testimoniales">
        <h3>Testimoniales</h3>
        <div className="testimonial">
          <blockquote>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eum optio hic neque possimus eius, suscipit iste voluptatibus
            excepturi repudiandae.
          </blockquote>
          <p>- Grupo # 1 BIM II IN6BM</p>
        </div>
      </section>
    </div>
    </>
  )
}
