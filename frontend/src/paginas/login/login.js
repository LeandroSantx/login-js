import React, { useState } from 'react';
import './style.css';
import usuarioService from '../../services/usuario';

function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
       
      usuarioService.loginUsuario(email, senha)
      .then(response => {
        if(response.status === 200 || response.status === 201) {
          alert('Bem-vindo!');
          setEmail('');
          setSenha('');
          setErro(false);
        }else{
          setErro(true);
        }
      })
      .catch(error => {
        console.log(error);
        setErro(true);
      })
    }
    return(
        <section class="area-login">
            <div class="login">
            <div>
                <img src="../../images/logo-dark.png" alt="logo"/>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email"  value={email} onChange={e => setEmail(e.target.value)} autofocus required/>
                <input type="password" name="senha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
                {erro && <p className="erro">Email ou senha inválidos!</p>}
                <input type="submit" name="entrar" value="entrar"/>
            </form>
            <p>Ainda não tem uma conta?<a href="../cadastro/cadastro.html">Criar conta</a></p>
        </div>
        </section>
    )

}

export default Login;