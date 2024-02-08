import cl from './Profile.module.scss'
function Profile() {
	return (
		<div className={cl.container}>
			<img
				src='https://sun9-53.userapi.com/impg/mlT6p1azAS7mo2Dzw9yUxKIJPg3lfs1ORWQGSw/P0zi9fOIz04.jpg?size=18x18&quality=96&sign=89dfec92310e640744fa6072a6e3572c&type=album'
				alt=''
			/>
			<div className={cl.price}>Профиль</div>
		</div>
	)
}

export default Profile
