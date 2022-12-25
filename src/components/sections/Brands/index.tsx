import React from "react"

import LogoGoogle from "../../../assets/brands_logo_google.svg"
import LogoSpotify from "../../../assets/brands_logo_spotify.svg"
import LogoGithub from "../../../assets/brands_logo_github.svg"
import LogoMicrosoft from "../../../assets/brands_logo_microsoft.svg"
import LogDdigg from "../../../assets/brands_logo_digg.svg"
import LogoHostgator from "../../../assets/brands_logo_hostgator.svg"

// import { Container } from './styles';

const Brands: React.FC = () => {
	const brandList = [
		{
			name: "google",
			ImageComponnent: function () {
				return <LogoGoogle />
			},
		},
		{
			name: "spotify",
			ImageComponnent: function () {
				return <LogoSpotify />
			},
		},
		{
			name: "github",
			ImageComponnent: function () {
				return <LogoGithub />
			},
		},
		{
			name: "microsoft",
			ImageComponnent: function () {
				return <LogoMicrosoft />
			},
		},
		{
			name: "digg",
			ImageComponnent: function () {
				return <LogDdigg />
			},
		},
		{
			name: "hostgator",
			ImageComponnent: function () {
				return <LogoHostgator />
			},
		},
	]

	return (
		<section className="brands">
			<div className="wrapper">
				<ul className="brands__list">
					{brandList.map(({ name, ImageComponnent }) => {
						return (
							<li key={name} className="brands__list__item">
								<ImageComponnent />
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Brands
