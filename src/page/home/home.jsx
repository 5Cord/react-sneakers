import React from 'react';
import AppContext from '../../context';
import Card from '../../widgets/card/card'
import cl from './home.module.scss'
function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) {
    const renderItem = () => {
        const filtredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={obj => onAddToFavorite(obj)}
                onPlus={obj => {
                    onAddToCart(obj)
                }}
                loading={isLoading}
                {...item}
            />
        ))

    }

    return (

        <div className={cl.header}>
            <div className={cl.upBlockBody}>
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : 'Все кросовки'}
                </h1>
                <div className={cl.blockInput}>
                    {searchValue && (
                        <div
                            onClick={() => {
                                setSearchValue('')
                            }}
                            className={cl.x}
                        >
                            х
                        </div>
                    )}
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        type='text'
                        placeholder='поиск'
                    />
                </div>
            </div>

            <div className={cl.container_item}>
                {renderItem()}
            </div>
        </div>

    )
}

export default Home;