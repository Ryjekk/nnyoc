import Layout from "../../components/layout/Layout";
import GlobalWrapper from "../../components/layout/ GlobalWrapper";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

const Item = ({products}) => {
    return (
        <GlobalWrapper>
            <Layout contentType='ItemContent' products={products}/>
        </GlobalWrapper>
    );
};

export default Item;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.HOST}/api/products`);
    const products = await res.json();

    return {
        props:
            {
                products
            }
    };
}