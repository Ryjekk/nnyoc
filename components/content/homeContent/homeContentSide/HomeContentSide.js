import {ListItem, ListTextExtra, OlItem} from "../../../../styles/common/typography";
import {productData} from "../../../../data/productData";

const HomeContentSide = () => {
    const handleClick = (id) => {
        console.log(id)
    }

    return (
        <OlItem>
            {productData.map(el => (
                <ListItem key={el.id} onClick={() => handleClick(el.id)}>
                    {el.title} <ListTextExtra>{el.titleExtra}</ListTextExtra>
                </ListItem>
            ))}
        </OlItem>
    );
};

export default HomeContentSide;