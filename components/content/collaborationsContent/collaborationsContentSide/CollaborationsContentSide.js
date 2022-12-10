//TODO this data can be fetched from rowy in pages/colaborationS
import {collaboration} from "../../../../data/collaboration";
import {ListItem, ListTextExtra, OlItem} from "../../../../styles/common/typography";
import Link from "next/link";

const CollaborationsContentSide = () => {
    return (
        <OlItem>
            {collaboration.map(el => (
                <ListItem key={el.id}>
                    <Link href={el.link}>
                        <span>
                            <span style={{lineHeight: "1.3"}}>
                                {el.title} x
                            </span>
                                <br/>
                            <span style={{paddingLeft: "40px"}}>
                                NoNoYesOfCourse <ListTextExtra>[{el.release}]</ListTextExtra>
                            </span>
                        </span>
                    </Link>
                </ListItem>
            ))}
        </OlItem>
    );
};

export default CollaborationsContentSide;