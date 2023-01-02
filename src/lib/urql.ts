import { cacheExchange, dedupExchange, fetchExchange, ssrExchange } from "@urql/core"
import { createClient } from "urql"

const isServerSide = typeof window === "undefined"
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
	url: "https://sa-east-1.cdn.hygraph.com/content/clcevheer59er01um3ibmexo6/master",
	exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }
