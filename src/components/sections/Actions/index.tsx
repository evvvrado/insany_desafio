import React from "react"

import IconChat from "../../../assets/actions_icon_chat.svg"
import IconGraph from "../../../assets/actions_icon_graph.svg"
import IconZap from "../../../assets/actions_icon_zap.svg"

import { motion } from "framer-motion"
import { Animations } from "../../../classes/Animations"

const Actions: React.FC = () => {
	return (
		<section className="actions">
			<motion.div
				initial={Animations.actionsWrapper.initial}
				whileInView={Animations.actionsWrapper.whileInView}
				transition={Animations.actionsWrapper.transition}
				className="wrapper"
			>
				<div className="actions__box">
					<picture className="actions__box__icon">
						<IconChat />
					</picture>
					<strong className="actions__box__title">Dúvidas? </strong>
					<p className="actions__box__paragraph">Envie uma mensagem para nosso time</p>
				</div>
				<div className="actions__box">
					<picture className="actions__box__icon">
						<IconGraph />
					</picture>
					<strong className="actions__box__title">Faça parte </strong>
					<p className="actions__box__paragraph">
						Cadastre-se para transformar sua empresa
					</p>
				</div>
				<div className="actions__box">
					<picture className="actions__box__icon">
						<IconZap />
					</picture>
					<strong className="actions__box__title">Chama no zap </strong>
					<p className="actions__box__paragraph">Fale com onosso comercial</p>
				</div>
			</motion.div>
		</section>
	)
}

export default Actions
