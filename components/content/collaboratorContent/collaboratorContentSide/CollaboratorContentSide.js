//TODO this data can be fetched from rowy in pages/colaborationS
import {collaboration} from "../../../../data/collaboration";
import {useRouter} from "next/router";
import {SideContent} from "../../../../styles/common/boxes";
import {TextLight, TextLightSmall} from "../../../../styles/common/typography";

const CollaboratorContentSide = () => {
    //TODO think maybe about switching it to id fetch?
    const {query: q} = useRouter();

    const data = collaboration.find(el => el.title.toUpperCase() === q.collaborator.toUpperCase())

    return (
        <SideContent>
            <div>
                <TextLight>About collaboration:</TextLight>
                <TextLightSmall s b mt={'10px'}>{data.description}</TextLightSmall>
                <TextLightSmall s b mt={'10px'}>{data.descriptionTwo}</TextLightSmall>
            </div>
            <div style={{marginTop: "20px"}}>
                <TextLight>Released:</TextLight>
                <TextLightSmall s b mt={'10px'}>{data.release}</TextLightSmall>
            </div>
            <div style={{marginTop: "20px"}}>
                <TextLight>About {data.title}:</TextLight>
                <TextLightSmall s b mt={'10px'}>{data.AboutArtist}</TextLightSmall>
            </div>
            <div style={{marginTop: "20px"}}>
                <TextLight>Socials:</TextLight>
                {data.socials.map((el, i) => (
                    <div key={i} style={{display: "flex"}}>
                        <TextLightSmall s b mt={'10px'}>
                            <a href={el.instagram}>Instagram</a>
                        </TextLightSmall>
                        <TextLightSmall s b style={{margin: "10px 5px 0 5px"}}>/</TextLightSmall>
                        <TextLightSmall s b mt={'10px'}>
                            <a href={el.web}>Web</a>
                        </TextLightSmall>
                    </div>
                ))}

            </div>
        </SideContent>
    );
};

export default CollaboratorContentSide;