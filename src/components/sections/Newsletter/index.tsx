import React from "react"

import IconMail from "../../../assets/newsletter_icon_mail.svg"

const Newsletter: React.FC = () => {
	return (
		<section className="newsletter">
			<div className="wrapper">
				<h3 className="newsletter__subtitle">Newsletter</h3>
				<h2 className="newsletter__title">Fique por dentro das novidades</h2>
				<p className="newsletter__text">
					Junte-se a mais de 20.000 clientes que já usam o SB para ficar por dentro de
					tudo que pode fazer sua empresa crescer.
				</p>

				<form className="newsletter__form">
					<label className="newsletter__form__label">
						<IconMail />

						<input
							className="newsletter__form__label__input"
							type="email"
							required
							maxLength={50}
							placeholder="Insira seu melhor e-mail"
						/>

						<button
							type="submit"
							name="button_submit"
							className="newsletter__form__label__submit"
						>
							Cadastrar
						</button>
					</label>

					<button type="submit" name="button_submit" className="newsletter__form__submit">
						Cadastrar
					</button>
				</form>
			</div>
		</section>
	)
}

export default Newsletter
