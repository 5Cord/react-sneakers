import React, { useState } from 'react'
import cl from './Crate.module.scss'

function Crate(props) {
	return (
		<div onClick={props.onClickCart} className={cl.container}>
			<img
				src='https://sun9-15.userapi.com/impg/B_ZMxc4Klso5rKaikgksRIK0-mISL8SCESjwHg/ftM21xOi2qs.jpg?size=20x20&quality=96&sign=27cd237751b833689f021b9523c3f8eb&type=album'
				alt=''
			/>
			<div className={cl.price}>1205 руб.</div>
		</div>
	)
}

export default Crate
