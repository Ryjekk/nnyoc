import GlobalWrapper from "../../components/layout/ GlobalWrapper";
import Layout from "../../components/layout/Layout";

const Collection = ({q}) => {
    return (
        <GlobalWrapper>
            <Layout contentType='CollectionContent' q={q}/>
        </GlobalWrapper>
    );
};

export default Collection;

export const getServerSideProps = async (ctx) => {
    const {query: q} = ctx

    return {
        props:
            {
                q
            }
    }
}