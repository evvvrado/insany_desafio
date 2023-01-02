import React from "react"

import Image from "next/image"
import { mounthsInPortuguese } from "../../../classes/Util"

type TBlogItem = {
	content: any
}

const BlogItem: React.FC<TBlogItem> = ({ content }) => {
	const postReleaseDate = new Date(content.postedAt)
	const postReleaseYear = postReleaseDate.getFullYear()
	const postReleaseMounth = postReleaseDate.getMonth()

	return (
		<div className="blog__list__item">
			<picture className="blog__list__item__thumbnail">
				<Image
					src={content.thumbnail.url}
					width={content.thumbnail.width}
					height={content.thumbnail.height}
					alt={"Conteúdo do Blog "}
				/>
			</picture>

			<div className="blog__list__item__info">
				<span className="blog__list__item__info__category">{content.category}</span>
				<span className="blog__list__item__info__release">{`${mounthsInPortuguese[postReleaseMounth]} ${postReleaseYear}`}</span>
			</div>

			<strong className="blog__list__item__title">{content.title}</strong>

			<div className="blog__list__item__author">
				<picture className="blog__list__item__author__avatar">
					<Image
						src={content.blogAuthor.avatar.url}
						width={content.blogAuthor.avatar.width}
						height={content.blogAuthor.avatar.height}
						alt={"Autor do Blog"}
					/>
				</picture>
				<div className="blog__list__item__author__name">
					<span>{content.blogAuthor.name}</span>
					<span className="blog__list__item__author__tag">Autor</span>
				</div>
			</div>
		</div>
	)
}

export default BlogItem
