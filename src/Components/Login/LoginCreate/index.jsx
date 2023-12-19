// Styles
import './style.css';

// React Router
import { Link } from "react-router-dom"

// React Components
import { Input } from '../../Forms/Input'
import { ButtonForm } from '../../Forms/Button'
import { useForm } from '../../../Hooks/useForm'
import { USER_POST } from '../../../api';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext'
import { useFetch } from '../../../Hooks/useFetch';

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = useContext(UserContext)
  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if(response.ok) userLogin(username.value, password.value);
  }

  return <div className='container-register container'>
    <div className="left-side__register">
      <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>

    <div className="right-side__register animeLeft">
      <h1>Cadastre-se</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Password" type="password" name="password" {...password}/>
        {
          loading ?
          (
            <ButtonForm inner="Carregando" disabled/>
          )
          :
          (
            <div className="info-cadastro">
              <ButtonForm inner="Cadastrar"/>
              <Link to="/login/">Já possui conta?</Link>
            </div>
          )
        }
        <p id="error">{error}</p>
      </form>
    </div>
  </div>
}