import styled from 'styled-components'
import addImg1 from "../../../assets/Images/addExp1.svg"
import addImg2 from "../../../assets/Images/addExp2.svg"
import addImg3 from "../../../assets/Images/addExp3.svg"

export default function AddExperience() {
  return (
    <AddExperienceContainer>
        <div className="header">
            <p>Stand out. Get discovered.</p>
            <p>Land your dream job.</p>
            <span className="addInfo">
                Start by creating a profile that makes you stand out. 
            </span>
        </div>
        <div className="addExp">
            <button>
                Add your experience
            </button>
            <div className="imgRow">
                <img src={addImg1} alt="experience image one" />
                <img src={addImg2} alt="experience image two" />
                <img src={addImg3} alt="experience image three" />
            </div>
        </div>
    </AddExperienceContainer>
  )
}

const AddExperienceContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 32px;
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: -1px;
        color: var(--black);
        p{
            font-size: 40px;
            font-weight: 500;
            line-height: 1;
            @media (max-width: 700px){
                font-size: 24px;
            }
        }
        span{
            padding-top: 10px;
            font-size: 14px;
            color: var(--grey);
        }
    }
    .addExp{
        display: flex;
        flex-direction: column;
        gap: 60px;
        align-items: center;
        @media (max-width: 700px){
            flex-direction: column-reverse;
        }
        button{
            width: 360px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--blue);
            color: var(--background-white);
            font-size: 14px;
            border-radius: 10px;
            @media (max-width: 700px){
                height: 44px;
                width: 100%;
            }
        }
        .imgRow{
            display: flex;
            @media (max-width: 850px){
                img{
                    height: 100px;
                    width: 100px;
                }
            }
        }
    }
`
