import {ListItem, ListTextExtra, OlItem} from "../../../../styles/common/typography";
import Link from "next/link";

const HomeContentSide = ({products: {data}}) => {
    return (
        <OlItem>
            {data.map(el => (
                <ListItem key={el.id}>
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