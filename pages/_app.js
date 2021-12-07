import Navbar from '../components/Navbar';

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
