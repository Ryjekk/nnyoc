import {ListItem, ListTextExtra, OlItem} from "../../../../styles/common/typography";
import Link from "next/link";
import {useRouter} from "next/router";

const HomeContentSide = ({products: {data}}) => {
    const {query: q} = useRouter();
    return (
        <OlItem>
            {data.map(el => (
                <ListItem key={el.id} underline={el.id === q.id}>
                    <Link href={`/item/${el.id}`}>
                        <span>
                            {el.name} <ListTextExtra>{el.metadata.warning}</ListTextExtra>
                        </span>
                    </Link>
                </ListItem>
            ))}
        </OlItem>
    );
};

export default HomeContentSide;