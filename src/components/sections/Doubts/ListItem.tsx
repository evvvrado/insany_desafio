import React, { useState } from "react"

import IconPlus from "../../../assets/doubt_icon_plus.svg"
import IconMinus from "../../../assets/doubt_icon_minus.svg"

type TListItem = {
	summary: string
	content: string
	index: number
}

const ListItem: React.FC<TListItem> = ({ summary, content, index }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleIsOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<li className="doubts__list__item">
			<details className="doubts__list__item__details">
				<summary className="doubts__list__item__details__summary" onClick={handleIsOpen}>
					<strong className="doubts__list__item__details__summary__number">
						{index < 10 ? `0${index}` : index}
					</strong>
					<span className="doubts__list__item__details__summary__text">{summary}</span>

					<button
						name="toggledetail"
						type="button"
						className="doubts__list__item__details__summary__icon"
					>
						{isOpen ? <IconMinus /> : <IconPlus />}
					</button>
				</summary>

				<p className={`doubts__list__item__details__content`}>{content}</p>
			</details>
		</li>
	)
}

export default ListItem
