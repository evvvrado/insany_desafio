import React from "react"

import BlogThumbnail from "../../../assets/blog_image_banner1.png"
import BlogAvatar from "../../../assets/blog_image_avatar1.png"
import Image from "next/image"

const BlogItem: React.FC = () => {
	return (
		<div className="blog__list__item">
			<picture className="blog__list__item__thumbnail">
				<Image src={BlogThumbnail} alt={"Conteúdo do Blog "} />
			</picture>

			<div className="blog__list__item__info">
				<span className="blog__list__item__info__category">Business</span>
				<span className="blog__list__item__info__release">Outubro 2021</span>
			</div>

			<strong className="blog__list__item__title">
				Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor
			</strong>

			<div className="blog__list__item__author">
				<picture className="blog__list__item__author__avatar">
					<Image src={BlogAvatar} alt={"Autor do Blog"} />
				</picture>
				<div className="blog__list__item__author__name">
					<span>Savannah Nguyen</span>
					<span className="blog__list__item__author__tag">Autor</span>
				</div>
			</div>
		</div>
	)
}

export default BlogItem
