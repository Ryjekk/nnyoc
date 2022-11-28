#Instruction for future Inuk in matter of naming the components

-> please note that content has always two components:
    - section 
    - side 

SIDE - is always coresponding to element which is in Grid placed next to big company text 
SECTION - section is coresponding to elemet which is displaying etiher carouselle with images or detail image of item 



///////



const SlideWrapper = styled.div`

`;

const SlideTrack = styled.div`
@keyframes scroll {
0% {
transform: translateY(0);
}
100% {
transform: translateY(calc(-600px * 11.2));
}
}

display: flex;
flex-direction: column;
gap: 45px;

animation: scroll 40s linear infinite;
height: calc(600px * 26);
`;

const Slide = styled.div`
border: 1px solid red;
margin-right: 24px;

:nth-child(even) {
align-self: flex-end;
}
`;