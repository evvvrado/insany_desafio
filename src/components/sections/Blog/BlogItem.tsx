import React from "react"

import Image from "next/image"
import { mounthsInPortuguese } from "../../../classes/Util"

const BlogItem: React.FC = ({ post }: any) => {
	const postReleaseDate = new Date(post.postedAt)
	const postReleaseYear = postReleaseDate.getFullYear()
	const postReleaseMounth = postReleaseDate.getMonth()

	return (
		<div className="blog__list__item">
			<picture className="blog__list__item__thumbnail">
				<Image
					src={post.thumbnail.url}
					width={post.thumbnail.width}
					height={post.thumbnail.height}
					alt={"Conteúdo do Blog "}
				/>
			</picture>

			<div className="blog__list__item__info">
				<span className="blog__list__item__info__category">{post.category}</span>
				<span className="blog__list__item__info__release">{`${mounthsInPortuguese[postReleaseMounth]} ${postReleaseYear}`}</span>
			</div>

			<strong className="blog__list__item__title">{post.title}</strong>

			<div className="blog__list__item__author">
				<picture className="blog__list__item__author__avatar">
					<Image
						src={post.blogAuthor.avatar.url}
						width={post.blogAuthor.avatar.width}
						height={post.blogAuthor.avatar.height}
						alt={"Autor do Blog"}
					/>
				</picture>
				<div className="blog__list__item__author__name">
					<span>{post.blogAuthor.name}</span>
					<span className="blog__list__item__author__tag">Autor</span>
				</div>
			</div>
		</div>
	)
}

export default BlogItem
