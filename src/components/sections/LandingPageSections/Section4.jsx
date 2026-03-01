import React from 'react'
import styled from 'styled-components'
import EngTrust1 from "../../../assets/Images/EngTrust1.svg"
import EngTrust2 from "../../../assets/Images/EngTrust2.svg"
import EngTrust3 from "../../../assets/Images/EngTrust3.svg"

export default function Section4() {
  return (
    <Section4Container>
        <span className="title">
            Why Engineers Trust Us <br />
            Over Anyone Else
        </span>
        <div className="imgRow">
            <img src={EngTrust1} alt="Enginner Trust 1" />
            <img src={EngTrust2} alt="Enginner Trust 2" />
            <img src={EngTrust3} alt="Enginner Trust 3" />
        </div>
    </Section4Container>
  )
}

const Section4Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-inline: clamp(16px, 8vw, 130px);
    gap: 60px;
    margin-bottom: 80px;
    @media (max-width: 700px) {
        gap: 20px;
        margin-bottom: 60px;
    }
    span{
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 500;
        line-height: 60px;
        text-align: center;
        @media (max-width: 700px) {
            font-size: 32px;
            line-height: 40px;
        }
    }
    .imgRow{
        display: flex;
        width: 100%;
        max-width: 100%;
        gap: 20px;
        align-items: stretch;
        justify-content: center;
        box-sizing: border-box;
        @media (max-width: 700px) {
            justify-content: flex-start;
            align-items: flex-start;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            touch-action: pan-x;
            scroll-snap-type: x proximity;
            gap: 16px;
        }
        &::-webkit-scrollbar {
            display: none;
        }
        img{
            flex: 1 1 0;      /* allow images to grow and shrink */
            min-width: 0;     /* necessary for flex items to shrink below intrinsic size */
            width: 100%;
            max-width: 100%;
            height: auto;     /* preserve aspect ratio */
            display: block;
            object-fit: contain;
            @media (max-width: 700px) {
                width: 336px;
                min-width: 336px;
                max-width: 336px;
                height: 420px;
                min-height: 420px;
                max-height: 420px;
                flex: 0 0 300px; /* prevent images from growing or shrinking */
                scroll-snap-align: start;
            }
        }

    }
`
