//TODO this data can be fetched from rowy in pages/colaborationS
import {collections} from "../../../../data/collections";
import {ListItem, ListTextExtra, OlItem} from "../../../../styles/common/typography";
import Link from "next/link";

const CollectionsContentSide = () => {
    return (
        <OlItem>
            {collections.map(el => (
                <ListItem key={el.id}>
                    <Link href={el.link}>
                        <span>
                            <span style={{lineHeight: "1.3"}}>
                                {el.title} <ListTextExtra>{el.release}</ListTextExtra>
                            </span>
                        </span>
                    </Link>
                </ListItem>
            ))}
        </OlItem>
    );
};

export default CollectionsContentSide;