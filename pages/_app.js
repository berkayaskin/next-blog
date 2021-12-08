import Navbar from '../components/Navbar';
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
    <>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  )
};

export default App;
