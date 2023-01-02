import type { AppProps } from "next/app"
import { WindowProvider } from "../context/WindowProvider"
import "../styles/main.scss"

import { Provider } from "urql"
import { client, ssrCache } from "../lib/urql"

export default function App({ Component, pageProps }: AppProps) {
	if (pageProps.urqlState) {
		ssrCache.restoreData(pageProps.urqlState)
	}

	return (
		<Provider value={client}>
			<WindowProvider>
				<Component {...pageProps} />
			</WindowProvider>
		</Provider>
	)
}
