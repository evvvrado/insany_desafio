import Link from "next/link"
import React, { useContext, useLayoutEffect, useRef, useState } from "react"
import { GetStaticProps } from "next"

import IconArrow from "../../../assets/blog_icon_arrow.svg"
import IconAngleLeft from "../../../assets/blog_icon_angle_left.svg"
import IconAngleRight from "../../../assets/blog_icon_angle_right.svg"
import BlogItem from "./BlogItem"

import { Context } from "../../../context/WindowProvider"
import { clamp } from "../../../classes/Util"

import { motion } from "framer-motion"
import { Animations } from "../../../classes/Animations"

import { HomesDocument, useHomesQuery } from "../../../generated/graphql"
import { client, ssrCache } from "../../../lib/urql"

const Blog: React.FC = () => {
	const { windowWidth } = useContext(Context)

	const [{ data }] = useHomesQuery({})

	const postWidth = 280
	const listGap = 32

	const blogRef = useRef() as React.MutableRefObject<HTMLInputElement>
	const listRef = useRef() as React.MutableRefObject<HTMLInputElement>

	const [blogViewsQuantity, setBlogViewsQuantity] = useState(0)
	const [slideView, setSlideView] = useState(1)

	const blogList = [data?.home?.blogList][0]

	const getPostQuantityPerSlide = () => {
		if (!blogList) return

		const wrapperWidth = blogRef.current.children[0].clientWidth
		const postQuantity = blogList.length
		const postPerScreen = Math.round(postQuantity / ((postQuantity * postWidth) / wrapperWidth))

		setBlogViewsQuantity(postQuantity / postPerScreen)
	}

	const getIndicatorSize = function () {
		const indicatorList = []

		for (let i = 1; i <= blogViewsQuantity; i++) {
			indicatorList.push({
				index: i,
			})
		}

		return indicatorList
	}

	useLayoutEffect(() => {
		getPostQuantityPerSlide()

		windowWidth <= 730 &&
			windowWidth > 0 &&
			listRef.current.addEventListener("scroll", verifyIndicator)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowWidth, blogList])

	const changeSlideView = (flag: boolean) => {
		const atualScrollLeft = listRef.current.scrollLeft
		const distanceToScroll = flag ? listRef.current.clientWidth : -listRef.current.clientWidth

		listRef.current.scrollLeft = distanceToScroll + atualScrollLeft
	}

	const verifyIndicator = () => {
		const atualScrollLeft = listRef.current.scrollLeft

		const resultSlide = Math.ceil(atualScrollLeft / (listGap + postWidth) + 1)

		setSlideView(clamp(resultSlide, 1, blogViewsQuantity))
	}

	const handleNextSlide = () => {
		setSlideView(clamp(slideView + 1, 1, blogViewsQuantity))
		changeSlideView(true)
	}
	const handlePreviousSlide = () => {
		setSlideView(clamp(slideView - 1, 1, blogViewsQuantity))
		changeSlideView(false)
	}

	return (
		<section className="blog" ref={blogRef}>
			<div className="wrapper">
				<motion.div
					viewport={{ once: true }}
					initial={Animations.blogHeader.initial}
					whileInView={Animations.blogHeader.whileInView}
					transition={Animations.blogHeader.transition}
					className="blog__header"
				>
					<div className="blog__header__text">
						<h3 className="blog__header__subtitle">Nosso blog</h3>
						<h2 className="blog__header__title">Notícias do mundo da tecnologia</h2>
					</div>

					<div className="blog__header__anchor">
						<Link href={"/"}>
							<span>Conheça nosso blog </span>
							<IconArrow />
						</Link>
					</div>

					<div className="blog__header__actions">
						<button
							name="previous_slide"
							className={`blog__header__actions__button ${
								slideView === 1 && "disabled"
							}`}
							onClick={handlePreviousSlide}
						>
							<IconAngleLeft />
						</button>
						<button
							name="next_slide"
							className={`blog__header__actions__button ${
								slideView === blogViewsQuantity && "disabled"
							}`}
							onClick={handleNextSlide}
						>
							<IconAngleRight />
						</button>
					</div>
				</motion.div>

				<motion.div
					viewport={{ once: true }}
					initial={Animations.blogList.initial}
					whileInView={Animations.blogList.whileInView}
					transition={Animations.blogList.transition}
					className="blog__list"
					ref={listRef}
				>
					<div className="blog__list__wrapper">
						{blogList?.map((post, index) => {
							return <BlogItem post={post} key={index} />
						})}
					</div>
				</motion.div>

				<div className="blog__indicators">
					{getIndicatorSize().map(({ index }) => {
						return (
							<span
								key={index}
								className={`blog__indicators__indicator ${
									index === slideView && "selected"
								}`}
							></span>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	await client.query(HomesDocument, {}).toPromise()

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
	}
}

export default Blog
