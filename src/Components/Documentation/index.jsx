// styles
import { useState } from 'react'
import { Banner } from '../Banner'
import './style.css'
import { PessoaFisica } from './PessoaFisica'
import { PessoaJuridica } from './PessoaJuridica'
import { Fiadores } from './Fiadores'
import { Garantia } from './Garantia'
import { Esclarecimento } from './Esclarecimento'

export const Documentation = () => {
    const [ activeLink, setActiveLink ] = useState('Locatário (a) - Pessoa Física')

    const data = [
        {
            title: 'Locatário (a) - Pessoa Física',
        },
        {
            title: 'Locatário (a) - Pessoa Jurídica',
        },
        {
            title: 'Fiadores',
        },
        {
            title: 'Garantia',
        },
        {
            title: 'Esclarecimentos',
        },
    ]
    return (
        <div className="documentation-container">
            {
                console.log(activeLink)
            }
            <Banner text="Documentação" img="https://huergo.com.br/lot/wp-content/uploads/2023/08/DOC.jpg"/>
            <div className="content-documentation container">
                <div className="top-side__documentation">
                    <ul>
                        {
                            data.map((item, index) => {
                                return <div className={activeLink == item.title ? 'content_document active' : 'content_document'}><li key={index} onClick={() => setActiveLink(item.title)}>{item.title}</li></div>
                            })
                        }
                    </ul>
                </div>
                <div className="bottom-side__documentation">
                    {
                        activeLink && activeLink == 'Locatário (a) - Pessoa Física' &&
                        (
                            <PessoaFisica />
                        ) 
                    }

                    {
                        activeLink && activeLink == 'Locatário (a) - Pessoa Jurídica' &&
                        (
                            <PessoaJuridica />
                        ) 
                    }

                    {
                        activeLink && activeLink == 'Fiadores' &&
                        (
                            <Fiadores />
                        ) 
                    }

                    {
                        activeLink && activeLink == 'Garantia' &&
                        (
                            <Garantia />
                        ) 
                    }

                    {
                        activeLink && activeLink == 'Esclarecimentos' &&
                        (
                            <Esclarecimento />
                        ) 
                    }
                </div>
            </div>
        </div>
    )
}