import React from 'react';
import cl from './drawer.module.scss';
import Info from '../../Info';

function Drawer({ onClose, onRemove, items = [] }) {
	return (
		<div className={cl.overlay}>
			<div className={cl.draw}>
				<div>
					<div className={cl.upDrawer}>
						<h1 className={cl.titleCart}>Корзина</h1>
						<div className={cl.closeDrawer} onClick={onClose}>
							Х
						</div>
					</div>
					{items.length > 0 ? (
						items.map((obj) => (
							<div key={obj.id} className={cl.Cart}>
								<div className={cl.imgCart}>
									<img src={obj.imageUrl} alt='' />
								</div>
								<div className={cl.right}>
									<div className={cl.titleCardCart}>{obj.name}</div>
									<div className={cl.downBlockCard}>
										<div className={cl.priceCart}>{obj.price}</div>
										<button onClick={() => onRemove(obj.id)} className={cl.delete}>X</button>
									</div>
								</div>
							</div>
						))
					) : (null)}
					{items.length == 0 ? (<Info title="Корзина пустая" description="" image="" />) : (null)}

				</div>
				{items.length > 0 ? (<div className={cl.downBlock}>
					<div className={cl.resultBlock}>
						<div className={cl.titleResultBlock}>Итого:</div>
						<div className={cl.Result}>21 498 руб.</div>
					</div>
					<div className={cl.nalogtBlock}>
						<div className={cl.titleResultBlock}>Налог 5%</div>
						<div className={cl.Result}>1074 руб.</div>
					</div>
					<button>Оформить заказ</button>
				</div>
				) : (null)}
			</div>
		</div>
	);
}

export default Drawer;
