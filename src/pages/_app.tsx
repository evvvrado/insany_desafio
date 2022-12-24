import type { AppProps } from "next/app"
import { WindowProvider } from "../context/WindowProvider"
import "../styles/main.scss"
// import "../style.css"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WindowProvider>
			<Component {...pageProps} />
		</WindowProvider>
	)
}
