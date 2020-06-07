import React from "react";
import { FiSearch, FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.scss";

import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div id="page-home">

      {/* <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiLogIn />
          Cadastrar um ponto de coleta
        </Link>
      </header> */}

      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />

          <Link to="/create-point">
              <FiLogIn />
            Cadastrar um ponto de coleta
          </Link> 
        </header> 

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Link to="/create-point">
            <span>
              <FiSearch />
            </span>
            <strong>Pesquisar pontos de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
