import Layout from "../../components/layout/Layout";
import GlobalWrapper from "../../components/layout/ GlobalWrapper";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

const Item = ({products, product, price}) => {
    return (
        <GlobalWrapper>
            <Layout contentType='ItemContent' products={products} product={product} price={price}/>
        </GlobalWrapper>
    );
};

export default Item;

export async function getServerSideProps(ctx) {
    //all products
    const res = await fetch(`/api/products`);
    const products = await res.json();
    //selected product
    const res2 = await fetch(`/api/product/${ctx.query.id}`)
    const product = await res2.json();
    //selected product price
    const res3 = await fetch(`/api/prices/${product.default_price}`)
    const price = await res3.json();

    return {
        props:
            {
                products,
                product,
                price
            }
    };
}