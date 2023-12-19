// React Hooks
import { useContext, useState } from 'react';

// Styles
import './style.css';

// React Icons
import { FaFacebook, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";
import { MdWork, MdContacts } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";


// React Context
import { UserContext } from '../../UserContext';

// Logo
import Logo from '../../assets/logos/logo.png'

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const handleMenu = () => {
    setActiveMenu(!activeMenu)
  }
  const [ servicesMenu, setServicesMenu ] = useState(!false)
  const local = useLocation()

  const { data, login } = useContext(UserContext)


  return (
    <header className="header">
      <div className="contact-side__header" style={ local.pathname != "/" ? {'background': '#001781'} : {} }>
        <div className="contact-info__header container" >
          <div className="icons-contact__header">
            <a href="https://www.facebook.com/lotimobiliaria" target='_blank'>
              <FaFacebook />
            </a>
            <FaInstagram />
            <a href="https://wa.me/5541995143839" target='_blank'>
              <FaWhatsapp /> 
            </a>
          </div>
            { 
              login &&
                <ul>
                    <li>
                        <Link to="/account">
                            {data.username}
                            <FaUser />
                        </Link>  
                    </li>
                </ul>
            }
            {
              !login &&
              <Link to="/login">
                <FaUnlockKeyhole />
              </Link>
            }
        </div>
      </div>

      <div className="info-side__header">
        <div className="info-container__header container">
          <div className="info-left__header">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>
          
          {
            login ?
            (
              <div className={!activeMenu ? 'info-right__header active' : 'info-right__header'}>
                <ul onClick={setActiveMenu}>
                    <li>
                      <Link to="/">
                        <a href="/">Ver postagens</a>
                      </Link>  
                    </li>

                    <li>
                      <Link to="/account/send-post">
                        <a href="/">Postar imóvel</a>
                      </Link>  
                    </li>
                </ul>
              </div>
            )
            :
            (
              <div className={!activeMenu ? 'info-right__header active' : 'info-right__header'}>
                <ul onClick={setActiveMenu}>
                    <li>
                      <Link to="/about">
                        <div className="about-icons">
                          <FaInfoCircle />
                          <a href="#home">Sobre nós</a>
                        </div>
                      </Link>  
                    </li>

                    <li id="link-service__container" onClick={() => setServicesMenu(!servicesMenu)}>
                      <div className="service">
                        <MdWork />
                        <a href="#">Serviços</a>
                      </div>

                      <div className={servicesMenu ? 'links-services active' : 'links-services'}>
                        <ul onClick={() => setServicesMenu(!servicesMenu)} id="sublinks">
                          <li>
                            <Link to="/vendas">
                            Vendas
                          </Link>
                          </li>

                          <li>
                            <Link to="/locacao">
                              Locação
                            </Link>
                          </li>

                          <li>
                            <Link to="/simulacao">
                            Financiamento
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link to="/doc">
                        <div className="docs-icon">
                          <IoMdDocument />
                          <a href="#home">Documentação</a>
                        </div>
                      </Link>  
                    </li>

                    <li>
                      <Link to="/contact">
                        <div className="contact-icons">
                          <MdContacts />
                          <a href="#home">Contato</a>
                        </div>
                      </Link>  
                    </li>
                </ul>
              </div>
            )
          }

          <div className="menu-icon" onClick={handleMenu}>
            {
              activeMenu ? 
              (<HiMenuAlt3 />) : 
              (<HiX  />)
            }
          </div>
        </div>
      </div>
    </header>
  )
};