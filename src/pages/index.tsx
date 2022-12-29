import { definition } from "../classes/definition"
import { PageTitle } from "../components/PageTitle"

import Header from "../components/layout/Header"
import About from "../components/sections/About"
import Hero from "../components/sections/Hero"
import Numbers from "../components/sections/Numbers"
import Brands from "../components/sections/Brands"
import Works from "../components/sections/Works"
import Blog from "../components/sections/Blog"
import Doubts from "../components/sections/Doubts"
import Actions from "../components/sections/Actions"
import Newsletter from "../components/sections/Newsletter"
import Footer from "../components/layout/Footer"

export default function Home() {
	console.log(
		"\n%cmade with ❤ by %c@evvvrado",
		"text-style:none; font-family: consolas; color:$white; background-color: #ff3434; padding: 5px; margin-top: 5px; margin-bottom: 15px;",
		"text-style:none; font-family: consolas; color:#fff; background-color: #ff3434; padding: 5px; margin-top: 5px; margin-bottom: 15px;"
	)

	return (
		<>
			<PageTitle title={`Início — ${definition.name}`} />
			<Header />
			<Hero />
			<Numbers />
			<About />
			<Brands />
			<Works />
			<Blog />
			<Doubts />
			<Actions />
			<Newsletter />
			<Footer />
		</>
	)
}
