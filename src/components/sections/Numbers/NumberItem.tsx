import React, { useEffect, useLayoutEffect, useState } from "react"

// import { Container } from './styles';

type TNumberItem = {
	number: {
		value: number
		post: string
	}
	text: String
}

const NumberItem: React.FC<TNumberItem> = ({ number, text }) => {
	const [animatedResult, setAnimatedResult] = useState(0)

	useLayoutEffect(() => {
		setTimeout(() => {
			if (animatedResult != number.value) setAnimatedResult(animatedResult + 1)
		}, 10)
	}, [animatedResult, number.value])

	return (
		<li className="numbers__content__list__item">
			<strong className="numbers__content__list__item__number">
				{animatedResult + number.post}
			</strong>
			<p className="numbers__content__list__item__description">{text}</p>
		</li>
	)
}

export default NumberItem
