// Styles
import './style.css';

// React Router
import { Link } from 'react-router-dom';

export const Post = ({ item } ) => {

  const price = Number(item.preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return (
    <div>
      {
        item &&
        <div className="post-section__container">
          <div className="img-post">
            <img src={item.imagens_relacionadas[0]} alt="img" />
          </div>
          
          <div className="post-info__section">
            <div className="topside-info__post">
              <h1>{item.breve_descricao}</h1>
              <p>{item.cidade} - {item.bairro}</p>
            </div>
            <div className="bottomside-info__post">
              <Link to={`/imovel/${item.id}`}>
                <button className="button">Ver imóvel</button>
              </Link>
              <h1>{price}</h1>
            </div>
          </div>
        </div>
      }
    </div>
  )
}