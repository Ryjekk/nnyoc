import {
    ArrowSpan,
    ItemDescription, ItemMore,
    ItemPrice,
    ItemSectionWrapper,
    ItemTitle,
    ItemType,
    ItemGalleryLine, CloseSpan, ButtonAdd, SelectWrapper
} from "./styles";
import {ListTextExtra} from "../../../../styles/common/typography";
import Gallery from "../../../common/gallery/Gallery";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {useShoppingCart} from "../../../../store/use-shopping-cart";
import {toast} from 'react-hot-toast';
import {formatItemToAdd} from "../../../../utils/formatTitemToAdd";
import Select from "react-select";

const ItemContentSection = ({product: p, price}) => {
    //basic
    const router = useRouter();
    const sizes = p.metadata?.size?.split(',').map(el => ({val: el.trim(), label: el.trim()}));
    const colors = p.metadata?.color?.split(',').map(el => ({val: el.trim(), label: el.trim()}));
    //state
    const {cartCount, addItem} = useShoppingCart();
    const [adding, setAdding] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [sizeSelected, setSize] = useState();
    const [colorSelected, setColor] = useState();
    //refs
    const toastId = useRef();
    const firstRun = useRef(true);

    const handleOnAddToCart = event => {
        event.preventDefault();
        setAdding(true);
        toastId.current = toast.loading('Adding 1 item...');
        setDisabled(true)
        const itemToAdd = formatItemToAdd(p, price, sizeSelected.val, colorSelected.val);
        addItem(itemToAdd);
    };

    useEffect(() => {
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }

        if (adding) {
            setAdding(false);
            toast.success(`${p.name} added`, {
                id: toastId.current,
            });
        }

        setDisabled(false)
    }, [cartCount]);

    useEffect(() => {
        setSize(undefined)
        setColor(undefined)
    }, [router.asPath])

    return (
        <ItemSectionWrapper>
            <ItemTitle style={{display: 'flex', alignItems: "baseline"}}>
                {p.name}
                <ListTextExtra>
                    {p.metadata?.warning}
                </ListTextExtra>
                {/*todo fix it for mobile to be display none or visible*/}
                <CloseSpan onClick={() => router.back()}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path
                            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
                    </svg>
                </CloseSpan>
            </ItemTitle>

            <ItemType>{p.metadata?.type}{' '}
                <ListTextExtra>[{p.metadata?.inStock}]</ListTextExtra>
            </ItemType>
            <ItemDescription>{p.description}</ItemDescription>
            <SelectWrapper>
                <ListTextExtra>Color*</ListTextExtra>
                <Select
                    value={colorSelected || ''}
                    onChange={setColor}
                    options={colors}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: "transparent",
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: "white",
                            color: "black"
                        }),
                        singleValue: (baseStyles, state) => ({
                            ...baseStyles,
                            color: "white",
                            mixBlendMode: "difference"
                        }),
                        dropdownIndicator: (baseStyles, state) => ({
                            ...baseStyles,
                            color: "red",
                            mixBlendMode: "difference"
                        })
                    }}
                />
            </SelectWrapper>
            <SelectWrapper>
                <ListTextExtra>Size*</ListTextExtra>
                <Select
                    value={sizeSelected || ''}
                    onChange={setSize}
                    options={sizes}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: "transparent",
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: "white",
                            color: "black",
                        }),
                        singleValue: (baseStyles, state) => ({
                            ...baseStyles,
                            color: "white",
                            mixBlendMode: "difference"
                        }),
                        dropdownIndicator: (baseStyles, state) => ({
                            ...baseStyles,
                            color: "red",
                            mixBlendMode: "difference"
                        })
                    }}
                />
            </SelectWrapper>

            <ItemPrice>
                <ArrowSpan>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path
                            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                    </svg>
                </ArrowSpan>
                {price.unit_amount_decimal.slice(0, -2)}.00 {price.currency.toUpperCase()}
                <ButtonAdd
                    onClick={handleOnAddToCart}
                    disabled={adding || disabled || !sizeSelected}
                    type="button"
                >{adding ? 'Adding...' : 'Add'}</ButtonAdd>
            </ItemPrice>

            <ItemMore>Fabric <span>&#8212;</span> {p.metadata?.fabric}</ItemMore>
            <ItemMore>Care Instruction <span>&#8212;</span> {p.metadata?.careInstruction}</ItemMore>

            <ItemGalleryLine/>
            <Gallery pid={p.id}/>

        </ItemSectionWrapper>
    );
};

export default ItemContentSection;