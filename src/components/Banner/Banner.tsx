import { styled } from "styled-components";

const Banner = () => { 
  return (
    <>
      <Wrapper>
        <Content>breakpoint 2023 - new city. new vibes - get tickets →</Content>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  z-index: 2;
  font-size: 16.8px;
  text-align: center;
  padding: 0.3rem 0.5rem;
  text-transform: uppercase;
  background: linear-gradient(
    270deg,
    rgb(171, 102, 255) 0%,
    rgb(20, 241, 149) 101.39%
  );
  font-weight: var(--font-weight-medium);
`;

const Content = styled.p`
  color: black;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
  width: fit-content;
  text-transform: uppercase;
  font-weight: var(--font-weight-thin);

  &:hover {
    color: ${(p) => p.theme.colors.PRIMARY};
    font-weight: var(--font-weight-thin);
  }
`;

export default Banner;
