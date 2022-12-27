import React from "react"

interface TTimelineItem {
	number: number
	title: string
	text: string
}

const TimelineItem: React.FC<TTimelineItem> = ({ number, title, text }) => {
	return (
		<li className="works__timeline__list__item">
			<span className="works__timeline__list__item__number">{number}</span>

			<div className="works__timeline__list__item__info">
				<strong className="works__timeline__list__item__info__title">{title}</strong>
				<p className="works__timeline__list__item__info__text">{text}</p>
			</div>
		</li>
	)
}

export default TimelineItem
