import Head from '@components/Head'

const Layout = (props) => (
    <>
        <Head />
        <header>
            {/* <Navbar /> */}
        </header>
        {props.children}
    </>
)

export default Layout