import MainHeader from '../main-header/MainHeader';

function Layout(props) {
  return <>
    <MainHeader/>
    <main>{props.children}</main>
  </>
}

export default Layout;