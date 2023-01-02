import React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import lockIcon from "../../../assets/forget_image_lock.png"

import IconClose from "../../../assets/modal_icon_close.svg"
import Image from "next/image"

type TModalPassword = {
	open: boolean
	setOpen: any
}

const ModalPassword: React.FC<TModalPassword> = ({ open, setOpen }) => {
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Portal>
				<Dialog.Overlay className="acessar__modal-overlay" />
				<Dialog.Content className="acessar__modal-content">
					<div className="acessar__modal-content__left">
						<picture className="acessar__modal-content__left__float">
							<Image src={lockIcon} alt={"Ícone de Cadeado"} />
						</picture>
					</div>

					<div className="acessar__modal-content__right">
						<h2 className="acessar__modal-content__right__title">Esqueceu a senha?</h2>

						<p className="acessar__modal-content__right__text">
							Digite seu e-mail e enviaremos instruções para redefinir sua senha
						</p>

						<form className="acessar__modal-content__right__form">
							<label className="acessar__modal-content__right__form__label">
								<span className="acessar__modal-content__right__form__label__text">
									E-mail
								</span>

								<input
									type="email"
									name="forget-email"
									id="forget-email"
									className="acessar__modal-content__right__form__label__input"
									placeholder="jhon@example.com"
									required
								/>
							</label>

							<button
								type="submit"
								className="acessar__modal-content__right__form__submit"
							>
								Recuperar senha
							</button>
						</form>
					</div>

					<Dialog.Close className="acessar__modal-close-icon">
						<IconClose />
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default ModalPassword
