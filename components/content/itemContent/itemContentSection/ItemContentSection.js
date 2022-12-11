import {
    ArrowSpan,
    ItemColor,
    ItemDescription, ItemMore,
    ItemPrice,
    ItemSectionWrapper,
    ItemSize,
    ItemTitle,
    ItemType,
    SizeWrapper,
    ItemGalleryLine
} from "./styles";
import {ListTextExtra} from "../../../../styles/common/typography";
import Gallery from "../../../common/gallery/Gallery";

const ItemContentSection = ({product: p, price}) => {
    const sizes = p.metadata?.size?.split(',');

    return (
        <ItemSectionWrapper>
            <ItemTitle>{p.name} <ListTextExtra>{p.metadata?.warning}</ListTextExtra></ItemTitle>
            <ItemType>{p.metadata?.type}</ItemType>
            <ItemDescription>{p.description}</ItemDescription>

            <ItemColor>{p.metadata?.color} <ListTextExtra>[{p.metadata?.inStock}]</ListTextExtra></ItemColor>
            <SizeWrapper>
                {sizes?.map((size, i) => (
                    <ItemSize key={i}>{size}</ItemSize>
                ))}
            </SizeWrapper>

            <ItemPrice>
                <ArrowSpan>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                    </svg>
                </ArrowSpan>
                {price.unit_amount_decimal.slice(0, -2)}.00 {price.currency.toUpperCase()}
            </ItemPrice>

            <ItemMore>Fabric <span>&#8212;</span> {p.metadata?.fabric}</ItemMore>
            <ItemMore>Care Instruction <span>&#8212;</span> {p.metadata?.careInstruction}</ItemMore>

            <ItemGalleryLine/>
            <Gallery pid={p.id}/>

        </ItemSectionWrapper>
    );
};

export default ItemContentSection;