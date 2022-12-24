import Image from "next/image"
import Link from "next/link"
import React, { useContext, useLayoutEffect, useState } from "react"

import { Animations } from "../../../classes/Animations"

import { motion } from "framer-motion"

import IconGlobe from "../../../assets/hero_icon_globe.svg"
import IconPhone from "../../../assets/hero_icon_phone.svg"
import IconArrow from "../../../assets/hero_icon_arrow-down.svg"

import FloatChat from "../../../assets/hero_float_chat.svg"
import GraphArrow from "../../../assets/hero_graph_arrow.svg"

import IconButtonArrow from "../../../assets/button_hover_arrow.svg"

import HeroImage from "../../../assets/hero_image_main.png"
import HeroImageMobile from "../../../assets/hero_image_main_mobile.png"

import { Context } from "../../../context/WindowProvider"

const Hero: React.FC = () => {
	const headingSpecialWordList = ["sucesso", "destaque", "impacto"]

	const [headingRandomWord, setHeadingRandomWord] = useState("")

	const { windowWidth } = useContext(Context)

	useLayoutEffect(() => {
		setHeadingRandomWord(headingSpecialWordList[Math.floor(Math.random() * (2 - 0) + 0)])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<section className="hero">
			<div className="wrapper">
				<motion.div
					initial={Animations.heroContent.initial}
					animate={Animations.heroContent.animate}
					transition={Animations.heroContent.transition}
					className="hero__content"
				>
					<span className="hero__content__upper-text">
						<IconGlobe />A receita certa para o seu negócio
					</span>

					<h1 className="hero__content__heading">
						O segredo para um negócio de <i>{headingRandomWord}!</i>
					</h1>

					<p className="hero__content__description">
						Pellentesque rutrum turpis non est turpis pretium morbi urna. Erat dictum
						blandit aliquam purus sed rhoncus.
					</p>

					<div className="hero__content__actions">
						<button className="hero__content__actions__register">
							<span>Cadastrar meu negócio</span>
							<IconButtonArrow />
						</button>

						<Link href={"/"} className="hero__content__actions__talk">
							<IconPhone />
							<span>Fale conosco</span>
						</Link>
					</div>

					<div className="hero__content__bottom">
						<div className="hero__content__bottom__arrows">
							<IconArrow />
							<IconArrow />
							<IconArrow />
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={Animations.heroImage.initial}
					animate={Animations.heroImage.animate}
					transition={Animations.heroImage.transition}
					className="hero__image"
				>
					<div className="hero__image__float-chat">
						<FloatChat />
					</div>

					<div className="hero__image__graph">
						<div className="hero__image__graph__header">
							<div className="hero__image__graph__header__text">
								<strong>RECEITA ANUAL</strong>
								<span>evolução</span>
							</div>

							<div className="hero__image__graph__header__arrow">
								<GraphArrow />
							</div>
						</div>

						<div className="hero__image__graph__columns">
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate2}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate3}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate4}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate5}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate6}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
							<motion.div
								initial={Animations.graphsColumn.initial}
								animate={Animations.graphsColumn.animate7}
								transition={Animations.graphsColumn.transition}
								className="hero__image__graph__columns__column"
							/>
						</div>
					</div>
					<figure>
						{windowWidth && windowWidth > 992 ? (
							<Image src={HeroImage} alt={"Imagem Principal "} />
						) : (
							<Image src={HeroImageMobile} alt={"Imagem Principal "} />
						)}
					</figure>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
