import {FooterWrapper, FooterWrapperTop} from "./styles";
import {TextLight, TextLightSmall} from "../../../../styles/common/typography";
import Switcher from "./switcher/Switcher";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <FooterWrapperTop>
        <TextLight>BASKET (1)</TextLight>
        <TextLight>
            <a href="https://www.instagram.com/nonoyesofcourse/" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </TextLight>
        <TextLight>
            <Link href="/collaborations">COLLABORATIONS</Link>
        </TextLight>
      </FooterWrapperTop>

      <FooterWrapper>
          <Switcher/>
          <TextLightSmall><a href="https://www.ryjewsky.com/" target="_blank" rel="noreferrer">ryjewsky</a> x NNYOC</TextLightSmall>
          <TextLightSmall>NO NO YES OF COURSE © 2023</TextLightSmall>
          <TextLightSmall>ICELAND / RTEYKJAVIK INGÓLFSSTRÆTI 10</TextLightSmall>
      </FooterWrapper>
    </div>
  );
};

export default Footer;