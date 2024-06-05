import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import we from './imagens/we.png';
import temperatura from "./imagens/temperatura.png"
import tab_temp from "./imagens/tabela_temperatura.png"
import tab_ph from "./imagens/Tabela_ph.png"


function App() {
  const [imagem, setImagem] = useState(null);
  const navLinksRef = useRef([]); // Declare navLinksRef fora da função
  const navbarRef = useRef(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Cria a URL
    setImagem(imageUrl);
  };

  // Função para rolagem suave
  const handleNavLinkClick = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    const targetId = event.target.hash;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Rolagem suave usando scrollIntoView com comportamento "smooth"
      targetElement.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  // Adiciona e remove event listeners para rolagem suave
  useEffect(() => {
    navLinksRef.current.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Limpa os event listeners ao desmontar o componente
    return () => {
      navLinksRef.current.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);


  return (
    <div>
      <header className="navbar" ref={navbarRef}> 
        <div className="navbar_box">
          <h1 className="navbar_title">Ocean<strong className="navbar_title strong">Sense</strong></h1>
          <nav>
            <ul>
              <li><a href="#quem-somos" className="navbar_link">Quem somos</a></li>
              <li><a href="#nossos-objetivos" className="navbar_link">Nossos objetivos</a></li>
              <li><a href="#porque-denunciar" className="navbar_link">Porque denunciar?</a></li>
              <li><a href="#denuncia" className="navbar_link">Denúncia</a></li>
              <li><a href="#futuro" className="navbar_link">Futuro</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="inicio">
        <section id='quem-somos' className="inicio_texto">
          <h1 className="inicio_titulo">Quem somos?</h1>
          <p className="inicio_descricao">
            O oceano sempre foi nossa inspiração, um universo de cores vibrantes sob as ondas, um gigante adormecido que pulsa vida em cada gota. Crescemos fascinados pela sua força e vastidão, mas também preocupados com a crescente sombra da poluição que ameaça sua beleza. Essa inquietação, compartilhada por cinco estudantes da FIAP, se transformou em um chamado à ação. Acreditamos que o futuro dos oceanos depende de cada um de nós, e que a tecnologia pode ser uma poderosa aliada nessa missão. Assim, unimos nossos talentos e paixão para criar o OceanSense, uma plataforma que amplifica a voz do mar e conecta aqueles que, como nós, sonham com um futuro mais azul. Junte-se a nós nessa corrente do bem! 🌊💙    
          </p>
        </section>
        <div className="inicio_imagem">
          <img src={we} alt="nossa foto" />
        </div>
      </main>
      
      <section id='nossos-objetivos'>
      <div className="objetivo">
        <h1 className="objetivo_titulo">Nossa missão</h1>
        <div className="circulos_container">
          <span className="circulo claro"> Proteger a saúde dos oceanos </span>
          <span className="circulo escuro"> Dar voz ao oceano </span>
          <span className="circulo claro"> Capacitar a comunidade </span>
          <span className="circulo escuro"> Conectar pessoas e tecnologias </span>
          <span className="circulo claro"> Inspirar a mudança de comportamento </span>
          <span className="circulo escuro"> Promover a colaboração </span>
          <span className="circulo claro"> Ser referência em inovação </span>
          <span className="circulo escuro"> Construir um futuro mais azul </span>
        </div>
      </div>
      </section>

      <section id='porque-denunciar'>
      <div className="porque">
        <h1 className="porque_titulo">Porque denunciar?</h1>
        <ul className="porque_ul">
          <li className="porque_lista"><strong className="porque_lista strong">Sua identidade protegida, impacto garantido:</strong> Denuncie sem medo e ajude a proteger o oceano sem se expor.</li>
          <li className="porque_lista"><strong className="porque_lista strong">Aja como um guardião do mar:</strong> Seja os olhos do oceano! Sua denúncia pode ser crucial para evitar um desastre ambiental.</li>
          <li className="porque_lista"><strong className="porque_lista strong">Cada denúncia, um passo para um futuro mais azul:</strong> Juntos, podemos criar uma rede de proteção poderosa e eficaz contra a poluição.</li>
          <li className="porque_lista"><strong className="porque_lista strong">Fazer a diferença é mais fácil do que você imagina:</strong> Basta um clique para dar voz ao oceano e inspirar mudanças reais. Denuncie!</li>
        </ul>
      </div>
      </section>


      <div className="denuncia">
        <div className="box_denuncia">
          <section id='denuncia'>
          <h1 className="denuncia_titulo">Faça sua denuncia anônima</h1>
          <input type="text" name="local" placeholder="Local" className="denuncia_input local" />
          <input type="datetime" name="horario" placeholder="Horário" className="denuncia_input horario" />
          <input type="text" name="obs" placeholder="Observação" className="denuncia_input obs" />
          <label htmlFor="denuncia_imagem" className="denuncia_input imagem">
          <input type="file" name="upload-input" id="denuncia_imagem" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} /> 
          <i className="fas fa-upload"></i> {/* Ícone dentro do label */}
          <span>Upload de Imagem</span> {/* Texto dentro do label */}
        </label>
          {imagem ? <img src={imagem} alt="foto carregada" className='denuncia_envio'/> : <p></p>}

          </section>
        </div>
      </div>
      <section id='futuro'>
      <div className='futuro'>
        <h1 className='futuro_titulo'>Nossas ideias para o futuro</h1>
        <div className='futuro_conteudo'>
        <ul className='futuro_ul'>
          <li className='futuro_lista'>Queremos ser uma<strong className='futuro_lista strong'>ferramenta para as autoridades e gestores</strong>tomarem decisões mais eficazes sobre o oceano. </li>
          <li className='futuro_lista'>Vamos ter uma<strong className='futuro_lista strong'>IA capaz de detectar anomalias no oceano.</strong></li>
          <li className='futuro_lista'>Integrar o sistema<strong className='futuro_lista strong'>de denuncias com o whatsapp</strong></li>
          <li className='futuro_lista'>Queremos ter uma<strong className='futuro_lista strong'>base de dados robusta para pesquisas científicas</strong>e ajudar no desenvolvimento de novas soluções.</li>
        </ul>
          <img src={temperatura} alt="mapa global" className='futuro_imagem'/>
       </div>
      </div>
      </section>
      
      <div className='exemplo'>

      <div className='exemplo_conteudo'>
      <h1 className='exemplo_titulo'>Exemplo do projeto finalizado</h1> 
        <div className='exemplo_row'> 
          <img src={tab_temp} alt="" className='exemplo_tabela'/>
          <ul className='exemplo_ul'>
            <li className='exemplo_li'>A temperatura no oceano pacifico está mais alta.</li>
          </ul>
        </div>
        <div className='exemplo_row'>
          <img src={tab_ph} alt="" className='exemplo_tabela'/>
          <ul className='exemplo_ul'>
            <li  className='exemplo_li'>O PH no oceano pacifico está mais acido. </li>
          </ul>
        </div>
        <h3 className='exemplo_descricao'>O projeto exibirá vária tabelas que serão separadas por regiões. As tabelas seguirão o estilo acima</h3>
        </div>
      </div>



    </div>
  );
}

export default App;
