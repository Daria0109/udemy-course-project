import '../styles/globals.css'
import App, {AppContext, AppProps} from 'next/app';
import Layout from '../components/layout/Layout';

function MyApp({Component, pageProps}: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return {...appProps}
}

export default MyApp
