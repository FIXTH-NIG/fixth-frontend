import styled from "styled-components";
// import frame264 from "./frame-264.png";
// import image from "./image.svg";
// import vector2 from "./vector-2.svg";
// import vector3 from "./vector-3.svg";
// import vector from "./vector.svg";
import faq1 from "../../../assets/Images/faq1.svg";
import faq2 from "../../../assets/Images/faq2.svg"
import faq3 from "../../../assets/Images/faq3.svg"
import faq4 from "../../../assets/Images/faq4.svg"
import bgGreaterThan from "../../../assets/Icons/bgGreaterThan.svg"
import bgLessThan from "../../../assets/Icons/bgLessThan.svg"   
import { useScreenWidth } from "../../../utils/useSreenWidth";

const BoxWrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 1300px) {
    margin-bottom: 60px;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

const Frame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 99px;
  width: 100%;
  gap: 20px;
`;

const FrequentlyAsked = styled.div`
  color: var(--black);
  font-family: "Inter-Medium", Helvetica;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -2.40px;
  line-height: normal;
  text-align: center;
    @media (max-width: 700px) {
        font-size: 32px;
        line-height: 40px;
    }
`;

const DivInlineFlex = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
`;

const GetStarted = styled.div`
  color: var(--blue);
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.70px;
  line-height: normal;
  text-align: center;
  width: fit-content;
`;

const MainCon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 390.22px;
  width: 100%;
  @media (max-width: 1300px) {
    height: fit-content;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
    @media (max-width: 1300px) {
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        touch-action: pan-x;
        scroll-snap-type: x proximity;
    }
  img{
    width: 307px;
    height: 267px;
    display: block;
    margin-left: 0;
    flex: 0 0 307px;
    @media (max-width: 1300px) {
        scroll-snap-align: start;
    }
  }
  .faq1img, .faq3img{
    rotate: 5.5deg;
    @media (max-width: 1300px) {
        rotate: 0deg;
    }
  }
    .faq2img, .faq4img{
        rotate: -5.5deg;
        @media (max-width: 1300px) {
            rotate: 0deg;
        }
    }
`;

const Frame7 = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export default function Section7() {
    const screenWidth = useScreenWidth();
    const faq = screenWidth > 700 ? "Frequently Asked Questions" : "FAQs";
  return (
    <BoxWrapper className="box">
      <Group className="group">
        <Frame className="frame">
          <FrequentlyAsked className="frequently-asked">
            {faq}
          </FrequentlyAsked>

          <DivInlineFlex className="div">
            <GetStarted className="get-started">Get Started ↗</GetStarted>
          </DivInlineFlex>
        </Frame>

        <MainCon className="main-con">
          <CardContainer className="CardContainer">
            <img src={faq1} alt="FAQ 1" className="faq1img" />
            <img src={faq2} alt="FAQ 2" className="faq2img" />
            <img src={faq3} alt="FAQ 3" className="faq3img" />
            <img src={faq4} alt="FAQ 4" className="faq4img" />
          </CardContainer>

          <Frame7 className="frame-7">
            <img src={bgLessThan} alt="Less Than" />
            <img src={bgGreaterThan} alt="Greater Than" />
          </Frame7>
        </MainCon>
      </Group>
    </BoxWrapper>
  );
};
