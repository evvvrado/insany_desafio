import React, { useState } from "react"
import { motion } from "framer-motion"

const GraphColumn: React.FC = () => {
	const handleGetGraphRandomNumber = function (max: number, min: number) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	return (
		<motion.div
			initial={{
				height: handleGetGraphRandomNumber(76, 37),
			}}
			animate={{
				height: handleGetGraphRandomNumber(76, 37),
			}}
			transition={{
				ease: "easeInOut",
				duration: 0.5,
				repeat: Infinity,
				repeatType: "reverse",
				repeatDelay: handleGetGraphRandomNumber(3, 1),
			}}
			className="hero__image__graph__columns__column"
		/>
	)
}

export default GraphColumn
