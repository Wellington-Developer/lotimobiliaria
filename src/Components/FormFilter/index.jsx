import { useEffect, useState } from 'react';
import './style.css';
import { useContext } from 'react';
import { UserContext } from '../../UserContext'
import { ButtonForm } from '../Forms/Button'

export const FormFilter = () => {
  const { posts, filterPosts } = useContext(UserContext);
  const [tipos, setTipos] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [bairros, setBairros] = useState([]);
  const [tipo, setTipo] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [ tipoNegocio, setTipoNegocio ] = useState('');

  const filterData = () => {
    if (posts) {
      const tiposSet = new Set();
      const cidadesSet = new Set();
      const bairrosSet = new Set();

      posts.forEach((post) => {
        tiposSet.add(post.tipo);
        cidadesSet.add(post.cidade);
        bairrosSet.add(post.bairro);
      });

      const tiposArray = Array.from(tiposSet);
      const cidadesArray = Array.from(cidadesSet);
      const bairrosArray = Array.from(bairrosSet);

      tiposArray.unshift('');
      cidadesArray.unshift('');
      bairrosArray.unshift('');

      setTipos(tiposArray);
      setCidades(cidadesArray);
      setBairros(bairrosArray);
    }
  }

  useEffect(() => {
    filterData();
  }, [posts]);

  useEffect(() => {
    filterPosts(tipo, cidade, bairro, tipoNegocio)
  }, [tipo, cidade, bairro, tipoNegocio])

  return (
    <div className="container-form__filter">
      <div className="img-form__filter">
        <div className="mask-img"></div>
        <div className="buttons-type-service">
          <ButtonForm inner="Locação" onClick={() => setTipoNegocio('Locacao')}/>
          <ButtonForm inner="Venda" onClick={() => setTipoNegocio('Venda')}/>
        </div>
        <div className="container-form">
          <div className="form">
          <form action="">
              <select onChange={(e) => setTipo(e.target.value)} value={tipo}>
                <option value="">Tipo</option>
                {tipos.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>

              <select onChange={(e) => setCidade(e.target.value)} value={cidade}>
                <option value="">Cidade</option>
                {cidades.map((cidade, index) => (
                  <option key={index} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>

              <select onChange={(e) => setBairro(e.target.value)} value={bairro}>
                <option value="">Bairro</option>
                {bairros.map((bairro, index) => (
                  <option key={index} value={bairro}>
                    {bairro}
                  </option>
                ))}
              </select>
              <a href="#posts">Visualizar</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}