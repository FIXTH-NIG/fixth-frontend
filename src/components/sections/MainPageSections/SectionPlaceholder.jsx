import styled from 'styled-components'

export default function SectionPlaceholder({ title }) {
  return (
    <Wrap>
      <h3>{title}</h3>
      <p>UI placeholder section for {title.toLowerCase()} content.</p>
    </Wrap>
  )
}

const Wrap = styled.section`
  width: 100%;
  min-height: 180px;
  border: 1px solid var(--light-ash);
  border-radius: 12px;
  padding: 16px;
  h3{
    margin: 0;
    color: var(--black);
    font-size: 16px;
  }
  p{
    margin-top: 8px;
    color: var(--primary-grey);
    font-size: 13px;
  }
`

