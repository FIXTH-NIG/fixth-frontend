import React from 'react'
import styled from 'styled-components'
import leftImg from "../../../assets/Images/johnFindingMatch.svg"
import { useState } from 'react'
import { css } from 'styled-components'


const SEARCH_PLACEHOLDERS = {
  talents: "Search by name, skill or role",
  jobs: "Search by title, skill or company",
};

export default function Section3({ onSearch }) {
  const [mode, setMode] = useState("jobs");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ mode, query: query.trim() });
  };
  return (
    <Section3Container>
        <img src={leftImg} alt="John finding a match" />
        <Card>
            <Content>
                <Tabs role="tablist" aria-label="Search mode">
                <TabButton
                    type="button"
                    role="tab"
                    aria-selected={mode === "talents"}
                    $active={mode === "talents"}
                    onClick={() => setMode("talents")}
                >
                    Find talents
                </TabButton>

                <TabButton
                    type="button"
                    role="tab"
                    aria-selected={mode === "jobs"}
                    $active={mode === "jobs"}
                    onClick={() => setMode("jobs")}
                >
                    Find jobs
                </TabButton>
                </Tabs>

                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={SEARCH_PLACEHOLDERS[mode]}
                        aria-label={SEARCH_PLACEHOLDERS[mode]}
                    />
                    <SearchButton type="submit">Search</SearchButton>
                </SearchForm>
            </Content>
         </Card>
    </Section3Container>
  )
}

const Section3Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 0 100px;
    padding-inline: clamp(16px, 8vw, 140px);
    gap: clamp(24px, 5vw, 78px);
    img {
      width: 385px;
      height: 344px;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        margin: 0 0 80px;
        padding-inline: 16px;
    }
`

const Card = styled.div`
  background-color: var(--background-white, #fcfcfc);
  position: relative;
  width: min(697px, 100%);
  min-height: 208px;
  overflow: visible;
  border-radius: 32px;

  /* Gradient border using pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 32px;
    padding: 5px;
    background: linear-gradient(to right, var(--blue-light, #4b6fbb), var(--white, #fcfcfc));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }

  /* Ensure content stays above border */
  > * {
    position: relative;
    z-index: 2;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  position: relative;
  z-index: 2;
  border-radius: 32px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background-color: var(--light-ash, #d1d1d1);
  border-radius: 40px;
  padding: 4px;
`;

const TabButton = styled.button`
  border-radius: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  color: var(--variable-collection-black, #1f1f1f);
  transition: all 0.2s ease;
  border: 2px solid transparent;

  ${({ $active }) =>
    $active
      ? css`
          border-color: var(--variable-collection-black, #1f1f1f);
          font-weight: 600;
        `
      : css`
          background: transparent;
        `}
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--variable-collection-light-ash, #d1d1d1);
  border-radius: 40px;
  padding: 4px;
  min-width: 0;  /* allow flex children to shrink below content size */
`;

const SearchInput = styled.input`
  flex: 1;
  border: 0;
  background: transparent;
  padding: 0 16px;
  height: 40px;
  color: var(--variable-collection-black, #1f1f1f);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  outline: none;
  min-width: 0;  /* allow shrinking below content size */

  &::placeholder {
    color: var(--variable-collection-primary-grey, #7f7f7f);
  }

  @media (max-width: 520px) {
    padding: 0 12px;
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  border-radius: 40px;
  background-color: var(--blue, #4b6fbb);
  color: var(--background-white, #fcfcfc);
  min-width: 167px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  padding: 0 20px;
  flex-shrink: 0;

  @media (max-width: 520px) {
    width: 120px;
    min-width: 120px;
    padding: 0;
  }
`;
