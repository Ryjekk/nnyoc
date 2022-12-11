import HomeContentSide from "../../homeContent/homeContentSide/HomeContentSide";

// here I am returning home content side because I do need to return same list of items so I do dont want to redo.
const ItemContentSide = ({products}) => {
  return <HomeContentSide products={products}/>;
};

export default ItemContentSide;