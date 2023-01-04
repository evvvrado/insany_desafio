import Image from "next/image"
import React, { useContext } from "react"
import { Context } from "../../../context/WindowProvider"

import { motion } from "framer-motion"
import { Animations } from "../../../classes/Animations"

import videoThumb from "../../../assets/about_image_video.png"
import videoThumbMobile from "../../../assets/about_image_video_mobile.png"
import imageEnterprise from "../../../assets/about_image_small.png"

import IconPlay from "../../../assets/about_icon_play.svg"
import IconCheck from "../../../assets/about_icon_check.svg"
import IconArrow from "../../../assets/hero_icon_arrow-down.svg"

const About: React.FC = () => {
	const { windowWidth } = useContext(Context)

	return (
		<section className="about">
			<div className="wrapper">
				<motion.div
					initial={Animations.aboutEnterprise.initial}
					transition={Animations.aboutEnterprise.transition}
					whileInView={Animations.aboutEnterprise.whileInView}
					viewport={{ once: true }}
					className="about__enterprise"
				>
					<p className="about__enterprise__subtitle">Sobre a empresa</p>
					<h2 className="about__enterprise__title">Criando e inovando desde 1988</h2>

					<ul className="about__enterprise__list">
						<li className="about__enterprise__list__item">
							<IconCheck />
							Sagittis sed cursus sed malesuada ultrices
						</li>
						<li className="about__enterprise__list__item">
							<IconCheck />
							Lectus ac at massa ac tellus fringilla aenean
						</li>
						<li className="about__enterprise__list__item">
							<IconCheck />
							Cras faucibus tristique volutpat accumsan
						</li>
					</ul>

					<div className="about__enterprise__bottom">
						<div className="about__enterprise__bottom__arrows">
							<IconArrow />
							<IconArrow />
							<IconArrow />
						</div>

						<picture className="about__enterprise__bottom__image">
							<Image src={imageEnterprise} alt={"Imagem Desenho Moça"} />
						</picture>
					</div>
				</motion.div>

				<div className="about__video">
					<motion.picture
						initial={Animations.aboutThumbnail.initial}
						transition={Animations.aboutThumbnail.transition}
						whileInView={Animations.aboutThumbnail.whileInView}
						viewport={{ once: true }}
						className="about__video__thumbnail"
					>
						<Image
							src={windowWidth && windowWidth > 992 ? videoThumb : videoThumbMobile}
							alt={"Vídeo exemplo"}
						/>

						<button
							type="button"
							aria-label="iniciar video"
							className="about__video__thumbnail__play"
						>
							<IconPlay />
						</button>
					</motion.picture>

					<p className="about__video__text">
						Suscipit pellentesque praesent auctor molestie massa nunc vitae. Felis eget
						est ut gravida in maecenas. Tempus in in in congue proin.
						<br />
						<br />
						Sem in feugiat id dui bibendum. Nunc ut mauris congue amet. Facilisis amet
						enim pellentesque eu suspendisse diam sit. Bibendum pharetra malesuada
						aliquam hendrerit consectetur neque. Gravida rhoncus enim a sodales feugiat
						senectus aenean felis. Vitae purus, amet semper pulvinar.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
