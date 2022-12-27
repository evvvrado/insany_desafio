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
	aboutEnterprise: {
		initial: {
			opacity: 0,
			y: 50,
		},
		whileInView: {
			opacity: 1,
			y: 0,
		},
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			delay: 0.5,
		},
	},
	aboutThumbnail: {
		initial: {
			opacity: 0,
			y: -50,
		},
		whileInView: {
			opacity: 1,
			y: 0,
		},
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			delay: 0.5,
		},
	},
	worksTimeline: {
		initial: {
			opacity: 0,
			x: 20,
		},
		whileInView: {
			opacity: 1,
			x: 0,
		},
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			delay: 0.5,
		},
	},
	blogHeader: {
		initial: {
			opacity: 0,
			y: 20,
		},
		whileInView: {
			opacity: 1,
			y: 0,
		},
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			delay: 0.5,
		},
	},
	blogList: {
		initial: {
			opacity: 0,
			y: 20,
		},
		whileInView: {
			opacity: 1,
			y: 0,
		},
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			delay: 0.7,
		},
	},
}
