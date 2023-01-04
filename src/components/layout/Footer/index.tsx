import Link from "next/link"
import React from "react"

import LogoFooter from "../../../assets/footer_logo.svg"

import IconTwitter from "../../../assets/footer_icon_twitter.svg"
import IconLinkedin from "../../../assets/footer_icon_linkedin.svg"
import IconInstagram from "../../../assets/footer_icon_instagram.svg"
import IconFacebook from "../../../assets/footer_icon_facebook.svg"

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="container">
				<div className="wrapper">
					<div className="footer__left">
						<Link
							href={"/"}
							title="Ir para o menu inicial"
							className="footer__left__logo"
						>
							<LogoFooter />
						</Link>

						<p className="footer__left__copyright">
							© 2022 SmartBusiness. Todos os direitos reservados
						</p>
					</div>

					<div className="footer__right">
						<ul className="footer__right__socials">
							<li className="footer__right__socials__item">
								<Link
									title="Link para o Twitter"
									href={"https://insany.design"}
									target="_blank"
								>
									<IconTwitter />
								</Link>
							</li>
							<li className="footer__right__socials__item">
								<Link
									title="Link para o Linkedin"
									href={"https://insany.design"}
									target="_blank"
								>
									<IconLinkedin />
								</Link>
							</li>
							<li className="footer__right__socials__item">
								<Link
									title="Link para o Instagram"
									href={"https://insany.design"}
									target="_blank"
								>
									<IconInstagram />
								</Link>
							</li>
							<li className="footer__right__socials__item">
								<Link
									title="Link para o Facebook"
									href={"https://insany.design"}
									target="_blank"
								>
									<IconFacebook />
								</Link>
							</li>
						</ul>
						<p className="footer__right__insany">
							Desenvolvido por
							<Link
								className="footer__right__insany__link"
								title="Acesse o site da Insany!"
								href={"https://insany.design"}
								target="_blank"
							>
								Insany Design
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
