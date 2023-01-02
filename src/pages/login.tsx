import React from "react"

import { PageTitle } from "../components/PageTitle"

import { definition } from "../classes/definition"
import Acessar from "../components/layout/Acessar"

const Login: React.FC = () => {
	return (
		<>
			<PageTitle title={`Acesse sua conta — ${definition.name}`} />
			<Acessar />
		</>
	)
}

export default Login
