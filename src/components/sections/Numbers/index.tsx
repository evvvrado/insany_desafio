import React from "react"
import NumberItem from "./NumberItem"

import IconMark from "../../../assets/numbers_marks.svg"
import Image from "next/image"

import avatarDepoiment from "../../../assets/numbers_image_avatar.png"

const Numbers: React.FC = () => {
	const numbersItems = [
		{
			number: {
				value: 120,
				post: "",
			},
			text: "Projeto realizado 2021",
		},
		{
			number: {
				value: 12,
				post: "",
			},
			text: "Escritórios no Brasil",
		},
		{
			number: {
				value: 325,
				post: "m",
			},
			text: "Faturamento 2021",
		},
	]

	return (
		<section className="numbers">
			<div className="wrapper">
				<div className="numbers__depoiments">
					<div className="numbers__depoiments__depoiment">
						<IconMark />

						<p className="numbers__depoiments__depoiment__text">
							Quis sed commodo est aliquam, praesent fames pretium quam. Nisi, massa
							of tipe tincidunt week.
						</p>

						<div className="numbers__depoiments__depoiment__info">
							<picture className="numbers__depoiments__depoiment__info__avatar">
								<Image
									src={avatarDepoiment}
									alt={"Foto representativa Depoimento"}
								/>
							</picture>
							<div className="numbers__depoiments__depoiment__info__texts">
								<strong className="numbers__depoiments__depoiment__info__texts__name">
									Savannah Nguyen
								</strong>
								<span className="numbers__depoiments__depoiment__info__texts__extra">
									UX Designer | Google
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="numbers__content">
					<ul className="numbers__content__list">
						{numbersItems.map(({ number, text }) => {
							return <NumberItem key={text} number={number} text={text} />
						})}
					</ul>

					<div className="numbers__content__text">
						<p className="numbers__content__text__paragraph">
							Expandindo para todo território nacional
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Numbers
