// В компоненте CartCard
import React from 'react';
import cl from './cartCard.module.scss';

function CartCard({ imgUrl, name, price }) {
    return (
        <div className={cl.Cart}>
            <div className={cl.imgCart}>
                <img src={imgUrl} alt='' />
            </div>
            <div className={cl.right}>
                <div className={cl.titleCardCart}>{name}</div>
                <div className={cl.downBlock}>
                    <div className={cl.priceCart}>{price}</div>
                    <button className={cl.delete}>X</button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
