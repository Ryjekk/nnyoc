import {SideWrapper} from "./styles";
import {TextHeader} from "../../../../styles/common/typography";
import {useSideTitleGenerator} from "../../../../hooks/useSideTitleGenerator";

const HeadText = () => {
    const title = useSideTitleGenerator()

    return (
        <SideWrapper>
            <TextHeader>{title}</TextHeader>
        </SideWrapper>
    );
};

export default HeadText;