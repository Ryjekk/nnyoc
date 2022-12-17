import GlobalWrapper from "../components/layout/ GlobalWrapper";
import Layout from "../components/layout/Layout";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

const Home = ({products}) => {
    return (
        <GlobalWrapper>
            <Layout contentType='HomeContent' products={products}/>
        </GlobalWrapper>
    )
}

export default Home;

export async function getServerSideProps() {
    const res = await fetch(`/api/products`);
    const products = await res.json();

    return {
        props:
            {
                products
            }
    };
}