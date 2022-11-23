import {FooterWrapper, FooterWrapperTop} from "./styles";
import {TextFooter, TextFooterTop} from "../../../../styles/common/typography";
import Switcher from "./switcher/Switcher";

const Footer = () => {
  return (
    <div>
      <FooterWrapperTop>
        <TextFooterTop>BASKET (1)</TextFooterTop>
        <TextFooterTop>INSTAGRAM</TextFooterTop>
        <TextFooterTop>COLLABORATIONS</TextFooterTop>
      </FooterWrapperTop>

      <FooterWrapper>
          <Switcher/>
          <TextFooter><a href="https://www.ryjewsky.com/" target="_blank" rel="noreferrer">ryjewsky</a> x NNYOC</TextFooter>
          <TextFooter>NO NO YES OF COURSE © 2023</TextFooter>
          <TextFooter>ICELAND / RTEYKJAVIK INGÓLFSSTRÆTI 10</TextFooter>
      </FooterWrapper>
    </div>

  );
};

export default Footer;