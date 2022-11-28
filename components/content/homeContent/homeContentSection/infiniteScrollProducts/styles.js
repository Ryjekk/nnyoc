import styled from "styled-components";

const SlideTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  //overflow: hidden;
`;

const Slide = styled.div`
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc((600px + 45px) * 14 * -1));
    }
  }

  animation: scroll 40s linear infinite;
  display: flex;

  :nth-child(even) {
    align-self: flex-end;
  }
`;

export {SlideTrack, Slide}

// https://stackoverflow.com/questions/70442770/infinite-scrolling-carousel-css-only

