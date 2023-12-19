import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../UserContext"
import { TbInfoTriangleFilled } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Post } from "../Post";

export const FilterResults = () => {
  const { filteredPosts } = useContext(UserContext);
  const [widthPesquisa, setWidthPesquisa] = useState(0);
  const carouselRef = useRef();

  const updateWidth = () => {
    setWidthPesquisa(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
  }

  useEffect(() => {
    updateWidth()
  }, [filteredPosts])

  return (
    <div>
      {filteredPosts && filteredPosts.length === 0 && (
          <p style={{ 'marginBottom': 24, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '12px' }}>
            <TbInfoTriangleFilled />
            Não encontramos resultado pra sua busca
          </p>
        )}
  
        {filteredPosts && filteredPosts.length >= 1 && (
          <div className="posts-section__container">
            <div className="info-posts__drag">
              <h1 className="title">
                <div>
                  <h1>Resultado: {filteredPosts[0].locacao_ou_venda === 'Locacao' ? 'Locação' : 'Venda'}</h1>
                </div>
              </h1>
              <FiArrowRight />
            </div>
            <motion.div ref={carouselRef} className="carousel">
              <motion.div
                className="posts-wrapper"
                drag={filteredPosts.length > 1 ? "x" : false}
                dragConstraints={{ right: 0, left: -widthPesquisa }}
                dragElastic={0.1}
                dragMomentum={0.5}
              >
                {filteredPosts.map((item, index) => (
                  <Post item={item} key={index} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
    </div>
  )
}