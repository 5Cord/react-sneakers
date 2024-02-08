import React from 'react'
import cl from './favorites.module.scss'
import Card from '../../widgets/card/card'
import AppContext from '../../context';

function Favorites() {
	const { favorites, onAddToFavorite} = React.useContext(AppContext);


	return (

		<div className={cl.header}>
			<div className={cl.upBlockBody}>
				<h1>
					Закладки
				</h1>
			</div>
			<div className={cl.container_item}>
				{favorites
					.map((item, index) => (
						<Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
					))}
			</div>


		</div>

	)
}

export default Favorites

