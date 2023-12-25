import { Banner } from "../Banner"
import { ButtonForm } from "../Forms/Button"
import { Input } from "../Forms/Input"
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const Contact = () => {
    return (
        <div>
            <Banner text="Contato" img="https://huergo.com.br/lot/wp-content/uploads/2023/08/contato.jpg"/>
            
            <div className="contact-container container">
                <div className="left-side__contact">
                    <div className="media-social__contact">
                        <h1>Mídia Social</h1>
                        <ul id="media">
                            <li><a href="https://www.facebook.com/lotimobiliaria"><span><FaFacebook /></span></a></li>
                            <li><a href=""><span><FaInstagram /></span></a></li>
                        </ul>
                    </div>

                    <div className="contact-container__contact">
                        <h1>Contato</h1>
                        <ul>
                            <li><span><FaMapMarkerAlt /></span><p>AV. SÃO JOSÉ, 1084 CRISTO REI – CURITIBA / PR</p></li>
                            <li><span><FaPhone /></span><p>(41) 3206-9139 | (41) 99514-3839</p></li>
                            <li><span><MdEmail /></span><p>contato@lotimobiliaria.com.br</p></li>
                        </ul>
                    </div>
                </div>
                <div className="right-side__banner">
                    <h1>Entre em contato conosco</h1>
                    <form>
                        <Input name="name" label="Seu nome" type="text" />
                        <Input name="email" label="Email" type="email" />
                        <Input name="mensagem" label="Mensagem" type="textarea" />
                        <ButtonForm inner="Enviar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}