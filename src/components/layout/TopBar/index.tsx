import Link from "next/link"
import React, { useState } from "react"

import IconX from "../../../assets/topbar_icon_x.svg"

const TopBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true)

	const handleCloseTopbar = () => {
		setIsOpen(false)
	}

	if (!isOpen) return <></>

	return (
		<section className="topbar">
			<div className="wrapper">
				<span className="topbar__text">
					Mês do digital, aproveite para{" "}
					<Link href={"/"}>fazer parte do SmartBusiness!</Link>
				</span>

				<button
					name="fechar"
					type="button"
					className="topbar__close"
					onClick={handleCloseTopbar}
				>
					<IconX />
				</button>
			</div>
		</section>
	)
}

export default TopBar
