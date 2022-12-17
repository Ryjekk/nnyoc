import {TextHeader} from "../../../../styles/common/typography";
import {useSideTitleGenerator} from "../../../../hooks/useSideTitleGenerator";
import {SideWrapper} from "./styles";
import {useRouter} from "next/router";

const HeadText = () => {
    const title = useSideTitleGenerator()
    const {pathname: p} = useRouter();
    const hideRightBorder = p.includes('/collection/[collection]')

    return (
        <SideWrapper hideRightBorder={hideRightBorder}>
            <TextHeader>{title}</TextHeader>
        </SideWrapper>
    );
};

export default HeadText;