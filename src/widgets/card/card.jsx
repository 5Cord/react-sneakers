import React from 'react'
import ContentLoader from 'react-content-loader'
import cl from './card.module.scss'
import AppContext from '../../context';

function Card({
	id,
	name,
	imageUrl,
	price,
	onFavorite,
	onPlus,
	favorited = false,
	loading = false
}) {
	const { isItemAdded } = React.useContext(AppContext);
	const [isFavorite, setIsFavorite] = React.useState(favorited)
	const obj = { id, parentId: id, name, imageUrl, price };

	const onClickPlus = () => {
		onPlus(obj);
	}

	const onClickFavorite = () => {
		onFavorite({ id, imageUrl, name, price })
		setIsFavorite(!isFavorite)
	}
	return (
		<div className={cl.header}>
			<div className={cl.card}>
				<div className={cl.cardContainer}>
					{loading ? <ContentLoader
						speed={2}
						width={255}
						height={250}
						viewBox="0 0 255 265"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb">
						<rect x="1" y="0" rx="10" ry="10" width="255" height="155" />
						<rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
						<rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
						<rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
						<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
					</ContentLoader> : <><div
						className={isFavorite ? cl.favoriteGreen : cl.favorite}
						onClick={onClickFavorite}
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z'
								stroke='#EAEAEA'
							/>
						</svg>
					</div>
						<div className={cl.containerImgCard}>
							<img src={imageUrl} alt='' />
						</div>
						<div className={cl.titleCard}>{name}</div>
						<div className={cl.downBlockCard}>
							<div className={cl.priceCard}>
								<div className={cl.titlePriceCard}>Цена:</div>
								<div className={cl.pricePriceCard}>{price} руб.</div>
							</div>
							{onPlus && (
								<button
									className={isItemAdded(id) ? cl.addButtonGreen : cl.addButton}
									onClick={onClickPlus}
								>
									+
								</button>
							)}
						</div></>}

				</div>
			</div>
		</div>
	)
}

export default Card