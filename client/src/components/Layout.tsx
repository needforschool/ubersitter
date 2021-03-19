import Head from '@components/Head'

const Layout = (props) => (
    <>
        <Head />
        {props.children}
    </>
)

export default Layout