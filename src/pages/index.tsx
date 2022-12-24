import { definition } from "../classes/definition"
import Header from "../components/layout/Header"
import { PageTitle } from "../components/PageTitle"
import Hero from "../components/sections/Hero"

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
		</>
	)
}
