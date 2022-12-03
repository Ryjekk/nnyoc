import {FooterWrapper, FooterWrapperTop} from "./styles";
import {TextFooter, TextFooterTop} from "../../../../styles/common/typography";
import Switcher from "./switcher/Switcher";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <FooterWrapperTop>
        <TextFooterTop>BASKET (1)</TextFooterTop>
        <TextFooterTop>
            <a href="https://www.instagram.com/nonoyesofcourse/" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </TextFooterTop>
        <TextFooterTop>
            <Link href="/collaborations">COLLABORATIONS</Link>
        </TextFooterTop>
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