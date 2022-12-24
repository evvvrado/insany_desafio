const handleGetGraphRandomNumber = function () {
	return Math.floor(Math.random() * (76 - 37) + 37)
}

export const Animations = {
	header: {
		initial: {
			opacity: 0,
			y: -10,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	heroContent: {
		initial: {
			opacity: 0,
			x: -10,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	heroImage: {
		initial: {
			opacity: 0,
			x: 10,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	graphsColumn: {
		initial: {
			height: 0,
		},
		animate: {
			height: handleGetGraphRandomNumber(),
		},
		animate2: {
			height: handleGetGraphRandomNumber(),
		},
		animate3: {
			height: handleGetGraphRandomNumber(),
		},
		animate4: {
			height: handleGetGraphRandomNumber(),
		},
		animate5: {
			height: handleGetGraphRandomNumber(),
		},
		animate6: {
			height: handleGetGraphRandomNumber(),
		},
		animate7: {
			height: handleGetGraphRandomNumber(),
		},
		animate8: {
			height: handleGetGraphRandomNumber(),
		},
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			// repeatDelay: 2,
			// repeat: Infinity,
		},
	},
}
