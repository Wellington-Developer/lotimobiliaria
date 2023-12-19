import { useContext, useEffect, useState } from "react"
import { UserContext } from '../../UserContext'
import { Post } from '../Home/Post'
import './style.css'

export const Vendas = () => {
  const { posts } = useContext(UserContext);
  const [ filteredPosts, setFilteredPosts ] = useState([])

  const filterPosts = () => {
    if(posts) {
      setFilteredPosts(posts.filter(post => post.locacao_ou_venda == 'Venda'))
    }
  }

  useEffect(() => {
    filterPosts()
  }, [posts])

  return (
    <div className="vendas container">
      <h1>Vendas</h1>
      <div className="container-vendas container">
        {
          filteredPosts.length >= 1 &&
          filteredPosts.map((post, index) => {
            return <div className="container-post__page"><Post item={post} key={index}/></div>
          })
        }
      </div>
    </div>
  )
}