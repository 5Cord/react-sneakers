import cl from './Bookmarks.module.scss'
function Bookmarks(props) {
	return (
		<div className={cl.container}>
			<img
				src='https://sun9-8.userapi.com/impg/Z7GElMX_oXQJYUKsb8bpHo_AVJoNo-WDzF6Qqg/gGHiP2Oc-iE.jpg?size=19x17&quality=96&sign=8bbfbd352fd0e1cca1db98cff9f09357&type=album'
				alt=''
			/>
			<div className={cl.price}>Закладки</div>
		</div>
	)
}

export default Bookmarks
