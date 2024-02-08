import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import cl from './App.module.scss'
import axios from 'axios'
import Favorites from './page/favorites/favorites'
import Drawer from './widgets/drawer/drawer'
import Header from './widgets/header/header'
import Home from './page/home/home'
import AppContext from './context'

function App() {
	let [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favorites, setFavorites] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const [cartResponse, favoritesResponse] = await Promise.all([
					axios.get('https://659d2ff8633f9aee7908d87b.mockapi.io/cart'),
					axios.get('https://3afba98d0805fc4e.mokky.dev/favorites')
				]);

				setCartItems(cartResponse.data);
				setFavorites(favoritesResponse.data);
				setIsLoading(false);
			} catch (error) {
				alert('Ошибка при запросе данных ;(');
				console.error(error);
			}
		}

		fetchData();
	}, []);

	useEffect(() => {
		async function fetchItems() {
			try {
				const itemsResponse = await axios.get('https://3afba98d0805fc4e.mokky.dev/items');
				setItems(itemsResponse.data);
			} catch (error) {
				console.error(error);
			}
		}

		if (!isLoading) {
			fetchItems();
		}
	}, [isLoading]);




	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
			if (findItem) {
				setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
				await axios.delete(`https://659d2ff8633f9aee7908d87b.mockapi.io/cart/${findItem.id}`);
			} else {
				setCartItems((prev) => [...prev, obj]);
				const { data } = await axios.post('https://659d2ff8633f9aee7908d87b.mockapi.io/cart', obj);
				setCartItems((prev) =>
					prev.map((item) => {
						if (item.parentId === data.parentId) {
							return {
								...item,
								id: data.id,
							};
						}
						return item;
					}),
				);
			}
		} catch (error) {
			alert('Ошибка при добавлении в корзину');
			console.error(error);
		}
	};

	const onRemoveItem = (id) => {
		try {
			axios.delete(`https://659d2ff8633f9aee7908d87b.mockapi.io/cart/${id}`);
			setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
		} catch (error) {
			alert('Ошибка при удалении из корзины');
			console.error(error);
		}
	};


	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://3afba98d0805fc4e.mokky.dev/favorites/${obj.id}`);
				setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
			} else {
				const { data } = await axios.post(
					'https://3afba98d0805fc4e.mokky.dev/favorites',
					obj,
				);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты');
			console.error(error);
		}
	};

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value)
	}

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) == Number(id));
	};

	return (
		<AppContext.Provider value={{
			items,
			cartItems,
			favorites,
			isItemAdded,
			onAddToFavorite,
			onAddToCart,
			setCartOpened,
			setCartItems,
		}}>
			<div className='App'>
				<div className={cl.container}>
					<Header onClickCart={() => setCartOpened(true)} />
					{cartOpened && (
						<Drawer
							items={cartItems}
							onRemove={onRemoveItem}
							onClose={() => setCartOpened(false)}
						/>
					)}

					<Routes>
						<Route path='/favorites' element={<Favorites />} />
						<Route path='/' exact element={<Home items={items}
							cartItems={cartItems}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
							isLoading={isLoading} />} />
					</Routes>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
