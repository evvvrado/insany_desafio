import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import bannerImage from "../../../assets/login_image_main.png"

import LogoAlternative from "../../../assets/login_logo.svg"
import GraphArrow from "../../../assets/hero_graph_arrow.svg"
import LogoGoogle from "../../../assets/login_icon_google.svg"
import IconArrow from "../../../assets/login_icon_arrow-left.svg"

import GraphColumn from "../../sections/Hero/GraphColumn"
import { motion } from "framer-motion"
import { Animations } from "../../../classes/Animations"
import ModalPassword from "./ModalPassword"

const Acessar: React.FC = () => {
	const [openModal, setOpenModal] = useState(false)

	const handleToggleModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<>
			<motion.div
				className="acessar"
				initial={Animations.heroContent.initial}
				animate={Animations.heroContent.animate}
				transition={Animations.heroContent.transition}
			>
				<aside className="acessar__banner">
					<Link href={"/"} title="Voltar para home" className="acessar__banner__logo">
						<LogoAlternative />
					</Link>

					<h2 className="acessar__banner__title">
						O verdadeiro conceito de <strong>Smart Company</strong>
					</h2>

					<picture className="acessar__banner__picture">
						<Image src={bannerImage} alt="Imagem Moça Gráfico" />

						<div className="acessar__banner__picture__graph">
							<div className="acessar__banner__picture__graph__header">
								<div className="acessar__banner__picture__graph__header__text">
									<strong>RECEITA ANUAL</strong>
									<span>evolução</span>
								</div>

								<div className="acessar__banner__picture__graph__header__arrow">
									<GraphArrow />
								</div>
							</div>

							<div className="acessar__banner__picture__graph__columns">
								{[1, 2, 3, 4, 5, 6, 7].map((item) => {
									return <GraphColumn key={item} />
								})}
							</div>
						</div>
					</picture>
				</aside>
				<main className="acessar__area">
					<div className="acessar__area__header">
						<Link href={"/"} className="acessar__area__header__redirect">
							<IconArrow />
							<span>Voltar</span>
						</Link>
					</div>

					<div className="acessar__area__main">
						<h2 className="acessar__area__main__title">Login</h2>

						<form className="acessar__area__main__form">
							<label className="acessar__area__main__form__label">
								<span className="acessar__area__main__form__label__text">
									E-mail
								</span>
								<input
									type="email"
									name="email"
									className="acessar__area__main__form__label__input"
									placeholder="Digite seu e-mail"
									required
								/>
							</label>

							<label className="acessar__area__main__form__label">
								<span className="acessar__area__main__form__label__text">
									Senha
								</span>
								<input
									type="password"
									name="current-password"
									className="acessar__area__main__form__label__input"
									placeholder="Digite sua senha"
									required
								/>
							</label>

							<div className="acessar__area__main__form__row">
								<label className="acessar__area__main__form__row__label-check">
									<input
										type="checkbox"
										name="acessar__area__main__form__row__label-check__input"
										className="acessar__area__main__form__row__label-check__input"
									/>

									<span className="acessar__area__main__form__row__label-check__text">
										Lembrar senha
									</span>
								</label>
								<button
									className="acessar__area__main__form__row__forget"
									type="button"
									onClick={handleToggleModal}
								>
									Esqueceu sua senha?
								</button>
							</div>

							<button
								type="submit"
								name="acessar__area__main__form__submit"
								className="acessar__area__main__form__submit"
							>
								Entrar
							</button>
						</form>

						<div className="acessar__area__main__divider">
							<hr />
							<span>Ou</span>
							<hr />
						</div>

						<button className="acessar__area__main__google">
							<LogoGoogle />
							<span>Entrar com o Google</span>
						</button>
					</div>

					<div className="acessar__area__footer">
						<span className="acessar__area__footer__text">
							Não tem uma conta?{" "}
							<Link title="Ir para Criar Conta" href={"#"}>
								Inscrever-se
							</Link>
						</span>
					</div>
				</main>
			</motion.div>

			<ModalPassword open={openModal} setOpen={handleToggleModal} />
		</>
	)
}

export default Acessar
