import { definition } from "../classes/definition"
import { PageTitle } from "../components/PageTitle"

import Header from "../components/layout/Header"
import About from "../components/sections/About"
import Hero from "../components/sections/Hero"
import Numbers from "../components/sections/Numbers"

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
		</>
	)
}
