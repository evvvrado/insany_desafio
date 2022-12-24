import Link from "next/link"
import React, { useLayoutEffect, useState } from "react"
import TopBar from "../TopBar"

import LogoImg from "../../../assets/header_logo.svg"
import LogoImgMobile from "../../../assets/header_logo_mobile.svg"

import IconUser from "../../../assets/header_icon_user.svg"
import IconArrow from "../../../assets/button_hover_arrow.svg"

import { motion } from "framer-motion"
import { Animations } from "../../../classes/Animations"

const Header: React.FC = () => {
	const [windowWidth, setWindowWidth] = useState(Number)

	const getWindowWidth = () => {
		setWindowWidth(window.innerWidth)
	}

	useLayoutEffect(() => {
		getWindowWidth()

		window.addEventListener("resize", () => {
			getWindowWidth()
		})
	}, [])

	return (
		<header>
			<TopBar />

			<motion.div
				initial={Animations.header.initial}
				animate={Animations.header.animate}
				transition={Animations.header.transition}
				className="container"
			>
				<div className="wrapper">
					<div className="header__logo">
						<Link href={"/"}>
							<picture className="header__logo__picture">
								{windowWidth && windowWidth > 700 ? <LogoImg /> : <LogoImgMobile />}
							</picture>
						</Link>
					</div>

					<nav className="header__actions">
						<ul className="header__actions__list">
							<li className="header__actions__list__item">
								<button
									className="header__actions__list__item__button-access"
									type="button"
								>
									<IconUser />
									<span>Acessar</span>
								</button>
							</li>

							<li className="header__actions__list__item">
								<button
									type="button"
									className="header__actions__list__item__button-register"
								>
									<span>Cadastre-se gratuitamente</span>
									<IconArrow />
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</motion.div>
		</header>
	)
}

export default Header
