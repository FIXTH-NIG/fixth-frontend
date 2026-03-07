import styled from "styled-components"
import searchIcon from "../../assets/Icons/searchIcon.svg"

export default function SearchBox({width="100%"}) {
    return (
        <SearchBoxCon style={{width}} >
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="search icon" />
        </SearchBoxCon>
    )
}

const SearchBoxCon = styled.div`
    height: 32px;
    position: relative;
    input{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: var(--light-ash);
        color: black;
        border: none;
        padding-left: 32px;
        &::placeholder{
            color: var(--grey);
        }
        &:active{
            border: none;
            outline: none;
        }
    }
    img{
        position: absolute;
        top: 8.5px;
        left: 12px;
    }
`
