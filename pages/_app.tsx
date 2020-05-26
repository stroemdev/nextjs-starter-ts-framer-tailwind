import '../styles/index.css'
import { AnimatePresence } from "framer-motion"

function App({ Component, pageProps }) {
    return (    
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
        </AnimatePresence>
    )
}

export default App