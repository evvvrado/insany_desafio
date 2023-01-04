import React from "react"

import IconArrow from "../../../assets/button_hover_arrow.svg"
import IconPhone from "../../../assets/hero_icon_phone.svg"
import { useDoubtsQuery } from "../../../generated/graphql"
import ListItem from "./ListItem"

const Doubts: React.FC = () => {
	const [{ data }] = useDoubtsQuery({})

	const doubtsList = [data?.home?.doubtsList][0]
	return (
		<section className="doubts">
			<div className="wrapper">
				<div className="doubts__text">
					<p className="doubts__text__subtitle">Tire suas dúvidas</p>
					<h2 className="doubts__text__title">Perguntas mais frequentes</h2>
					<p className="doubts__text__description">
						Separamos algumas perguntas e respostas que podem te ajudar na sua decisão
					</p>

					<button
						name="cadastrar"
						type="button"
						className="doubts__text__button-register"
					>
						<span>Cadastrar meu negócio</span>
						<IconArrow />
					</button>

					<button name="fale" className="doubts__text__button-access" type="button">
						<IconPhone />
						<span>Fale conosco</span>
					</button>
				</div>

				<ul className="doubts__list">
					{doubtsList?.map(({ content, summary }, index) => {
						return (
							<ListItem
								key={index}
								index={index + 1}
								content={content}
								summary={summary}
							/>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Doubts
