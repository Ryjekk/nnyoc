import {GridWrapper} from "./styles";
import Side from "../common/side/Side";

const Layout = ({contentType}) => {
  return (
    <main>
      <GridWrapper>
        <Side />
      </GridWrapper>
    </main>
  );
};

export default Layout;


// TODO in layout and components
// --> Grid -- inn ✅
//    --> Section -- dynamic rendered based on content type -- component
//    --> Header  -- component 'SIDE'; ✅
//        --> Flex -- inn ✅
//            --> LogoSide -- component ✅
//            --> ContentSide -- component ✅
//                --> ItemList || ItemListDetails -- dynamic rendered based on content type -- components
//                --> Footer -- component ✅
//                    --> Socials -- component
//                    --> Created By Inuk -- inn