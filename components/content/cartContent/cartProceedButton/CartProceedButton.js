import {ButtonProceed, ButtonProceedWrapper, PlusBL, PlusBR, PlusTL, PlusTR, TextButtonProceed} from "./styles";

const CartProceedButton = () => {
    return (
        <ButtonProceedWrapper>
            <ButtonProceed>
                <PlusTL>
                    <svg data-v-3c95d16a=""
                         viewBox="0 0 5 5"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         className="">
                        <path d="M3 0H2v2H0v1h2v2h1V3h2V2H3V0Z" fill="white"/>
                    </svg>
                </PlusTL>
                <PlusTR>
                    <svg data-v-3c95d16a=""
                         viewBox="0 0 5 5"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         className="">
                        <path d="M3 0H2v2H0v1h2v2h1V3h2V2H3V0Z" fill="white"/>
                    </svg>
                </PlusTR>
                <TextButtonProceed>CHECKOUT</TextButtonProceed>
                <PlusBL>
                    <svg data-v-3c95d16a=""
                         viewBox="0 0 5 5"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         className="">
                        <path d="M3 0H2v2H0v1h2v2h1V3h2V2H3V0Z" fill="white"/>
                    </svg>
                </PlusBL>
                <PlusBR>
                    <svg data-v-3c95d16a=""
                         viewBox="0 0 5 5"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         className="">
                        <path d="M3 0H2v2H0v1h2v2h1V3h2V2H3V0Z" fill="white"/>
                    </svg>
                </PlusBR>
            </ButtonProceed>
        </ButtonProceedWrapper>
    );
};

export default CartProceedButton;