import React, { useContext } from "react"
import TimelineItem from "./TimelineItem"

import cursorImage from "../../../assets/service_image_cursor.png"

import IconStar from "../../../assets/service_icon_star.svg"
import Image from "next/image"

import { Context } from "../../../context/WindowProvider"
import { motion } from "framer-motion"
import { Animations } from "../../../classes/Animations"

const Works: React.FC = () => {
	const { windowWidth } = useContext(Context)

	const timelineItems = [
		{
			title: "Cadastre-se em nosso site",
			text: "Ultricies sed leo ac vel lectus nisi vestibulum",
		},
		{
			title: "Selecione um produto ",
			text: "Eros lorem ac viverra donec velit.",
		},
		{
			title: "Realize a venda pleo Instagram",
			text: "Purus potenti ac elementum odio nulla ",
		},
		{
			title: "Acompanhe seus rendimentos",
			text: "Ipsum varius egestas pharetra viverra.",
		},
	]

	return (
		<section className="works">
			<div className="wrapper">
				<div className="works__sells">
					{windowWidth > 992 && (
						<>
							<p className="works__subtitle">Entenda como funciona</p>
							<h2 className="works__title">Veja como aplicamos nossa metodologia</h2>
						</>
					)}

					<div className="works__sells__pictures">
						<div className="works__sells__pictures__cursor">
							<picture className="works__sells__pictures__cursor__picture">
								<Image src={cursorImage} alt={"Ícone cursor mouse"} />
							</picture>

							<strong className="works__sells__pictures__cursor__title">1900</strong>

							<div className="works__sells__pictures__cursor__text">
								vendas realizadas
							</div>
						</div>
						<picture className="works__sells__pictures__notebook"></picture>
					</div>
				</div>

				<motion.div
					initial={Animations.worksTimeline.initial}
					whileInView={Animations.worksTimeline.whileInView}
					transition={Animations.worksTimeline.transition}
					viewport={{ once: true }}
					className="works__timeline"
				>
					{windowWidth < 992 && (
						<>
							<p className="works__subtitle">Entenda como funciona</p>
							<h2 className="works__title">Veja como aplicamos nossa metodologia</h2>
						</>
					)}

					<ul className="works__timeline__list">
						{timelineItems.map(({ title, text }, index) => {
							return (
								<TimelineItem
									key={index}
									number={index + 1}
									title={title}
									text={text}
								/>
							)
						})}

						<li className="works__timeline__list__item">
							<span className="works__timeline__list__item__number">
								<IconStar />
							</span>

							<div className="works__timeline__list__item__info ">
								<strong className="works__timeline__list__item__info__title">
									Compartihe com seu time
								</strong>
								<p className="works__timeline__list__item__info__text">
									Ipsum varius egestas pharetra viverra.
								</p>
							</div>
						</li>
					</ul>
				</motion.div>
			</div>
		</section>
	)
}

export default Works
