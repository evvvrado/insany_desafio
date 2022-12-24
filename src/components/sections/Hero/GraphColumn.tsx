import React from "react"

import { Animations } from "../../../classes/Animations"

import { motion } from "framer-motion"

const GraphColumn: React.FC = () => {
	const handleGetGraphRandomNumber = function () {
		return Math.floor(Math.random() * (76 - 37) + 37)
	}

	return (
		<motion.div
			initial={Animations.graphsColumn.initial}
			animate={{
				height: handleGetGraphRandomNumber(),
			}}
			transition={Animations.graphsColumn.transition}
			className="hero__image__graph__columns__column"
		/>
	)
}

export default GraphColumn
