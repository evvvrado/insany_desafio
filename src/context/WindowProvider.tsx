import React, { createContext, ReactNode, useLayoutEffect, useState } from "react"

type IWindowProvider = {
	children?: ReactNode | undefined
}

type WindowProviderType = {
	windowWidth: number
}

const Context = createContext({} as WindowProviderType)

const WindowProvider: React.FC<IWindowProvider> = ({ children }) => {
	WindowProvider.defaultProps = {
		children: null,
	}

	const [windowWidth, setWindowWidth] = useState(Number)

	const getWindowWidth = () => {
		setWindowWidth(window.innerWidth)
	}

	useLayoutEffect(() => {
		getWindowWidth()
		window.addEventListener("resize", getWindowWidth)
	}, [])

	return (
		<Context.Provider
			value={{
				windowWidth,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export { Context, WindowProvider }
