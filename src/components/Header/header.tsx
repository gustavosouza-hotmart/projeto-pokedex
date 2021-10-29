import React from 'react';
import "./header.style.scss";

function Header() {
    return(
      <div className="header">
          <h1>Treinadores</h1>
          <span className="header__message">Selecione, edite, remova ou adicione novos treinadores aqui</span>
      </div>
    )
}

export default Header;