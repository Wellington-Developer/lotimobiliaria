import './style.css';
import { Post } from '../Post';
import { useEffect, useState, useRef, useContext } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { UserContext } from '../../../UserContext';
import { FilterResults } from '../FilterResults';

export const Posts = ({ type }) => {
  const [data, setData] = useState([]);
  const [dataLocacao, setDataLocacao] = useState([]);
  const [dataVenda, setDataVenda] = useState([]);
  const [widthLocacao, setWidthLocacao] = useState(0);
  const [widthVenda, setWidthVenda] = useState(0);
  const carouselLocacao = useRef();
  const carouselVenda = useRef();
  const { filteredPosts } = useContext(UserContext);

  const fetchData = async () => {
    try {
      const response = await fetch('https://huergo.com.br/lot-api/json/api/photo');

      if (response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        console.error('Erro ao carregar os dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
    }
  };

  const filterSections = () => {
    if (data) {
      const locacaoPosts = data.filter(imovel => imovel.locacao_ou_venda === "Locacao");
      const vendaPosts = data.filter(imovel => imovel.locacao_ou_venda === "Venda");
      setDataLocacao(locacaoPosts);
      setDataVenda(vendaPosts);
    }
  };

  const updateWidth = () => {
    setWidthLocacao(carouselLocacao.current?.scrollWidth - carouselLocacao.current?.offsetWidth);
    setWidthVenda(carouselVenda.current?.scrollWidth - carouselVenda.current?.offsetWidth);
  };

  useEffect(() => {
    updateWidth()
  }, [filteredPosts, dataVenda, dataLocacao]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateWidth();
    filterSections();
  }, [data, filteredPosts, dataVenda, dataLocacao]);

  return (
    <div>
      {
        <FilterResults />
      }
      {
        <div className="posts-section__container">
          <div className="info-posts__drag">
            <h1 className="title">{dataLocacao && dataLocacao.length > 0 && 'Locação'}</h1>
            <FiArrowRight />
          </div>
            <motion.div ref={carouselLocacao} className="carousel">
              <motion.div
                className="posts-wrapper"
                drag={"x"}
                dragConstraints={{ right: 0, left: -widthLocacao }}
                dragElastic={0.1}
                dragMomentum={0.5}
              >
                {dataLocacao && dataLocacao.map((item, index) => (
                  <Post item={item} key={index} />
                ))}
              </motion.div>
            </motion.div>
        </div>
      }

      {
        <div className="posts-section__container">
          <div className="info-posts__drag">
            <h1 className="title">{dataVenda && dataVenda.length > 0 && 'Venda'}</h1>
            <FiArrowRight />
          </div>
          <motion.div ref={carouselVenda} className="carousel">
              <motion.div
                className="posts-wrapper"
                drag={"x"}
                dragConstraints={{ right: 0, left: -widthVenda }}
                dragElastic={0.1}
                dragMomentum={0.5}
              >
                {dataVenda && dataVenda.map((item, index) => (
                  <Post item={item} key={index} />
                ))}
              </motion.div>
            </motion.div>
        </div>
      }
    </div>
  );
};
