import React, { useState } from 'react';
import './style.css';
import usuarioService from '../../services/usuario';
import logo from '../../images/logo-dark.png';

function Cadastro(){

    const [formData, setFormData] = useState({
        email: '',
        nome: '',
        senha: '',
        nrsec: ''
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const teste = formData.nrsec = '123';
    
          await usuarioService.postUsuario(formData, teste);
    
          alert('inserido!');
    
          setFormData({ // definir o estado inicial do formData
            email: '',
            nome: '',
            senha: '',
            nrsec: ''
          });
    
        } catch (error) {
          console.error(error);
        }
      };
    return(
    <body>
        <section class="area-cadastro">
            <div class="cadastro">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nome" id="nome" placeholder="nome" value={formData.nome} onChange={handleChange} required/>
                    <input type="email" name="email" id="nome" placeholder="email" value={formData.email} onChange={handleChange} required/>
                    <input type="password" name="senha" id="nome" placeholder="senha" value={formData.senha} onChange={handleChange} required/>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
        </section>
    </body>
    )
}
export default Cadastro;