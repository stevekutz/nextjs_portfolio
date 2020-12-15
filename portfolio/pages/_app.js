// import '../styles/globals.css'
import '../styles/main.scss'  // for a global CSS file

// other page components are passed into MyApp
// styles
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} myAppProps = "Passed in from MyApp in _App"/>
}

export default MyApp
