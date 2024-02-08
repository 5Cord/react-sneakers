import Bookmarks from '../../features/bookmarks/Bookmarks'
import Crate from '../../features/crate/Crate'
import Profile from '../../features/profile/Profile'
import cl from './header.module.scss'
import { Link } from 'react-router-dom'
function Header(props) {
	return (
		<div className={cl.header}>
			<Link to="/">
				<div className={cl.logo}>
					<img
						src='https://sun9-56.userapi.com/impg/Jc0_SXMHZPL8miOUVy4QEFDHG-NsCK8_ZB6jLA/JOdTT4dXLss.jpg?size=40x40&quality=96&sign=ae152a7ffdd1e2dfa168f4c2028b4735&type=album'
						alt='logo'
					/>
					<div className={cl.containerTextLogo}>
						<div className={cl.upTextLogo}>REACT SNEAKERS</div>
						<div className={cl.dwTextLogo}>Магазин лучших кроссовок</div>
					</div>
				</div>
			</Link>
			<div className={cl.right}>
				<div className={cl.Crate} onClick={props.onClickCart}>
					<Crate />
				</div>
				<Link to="/favorites"><Bookmarks />
				</Link>
				<Profile />
			</div>
		</div>
	)
}

export default Header
