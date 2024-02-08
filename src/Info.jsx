import React from 'react';
import cl from './widgets/drawer/drawer.module.scss'
import AppContext from './context';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={cl.cartEmpty}>
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button className={cl.greenButton} onClick={() => setCartOpened(false)}>
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
