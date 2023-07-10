import { styled } from "styled-components";

export const wrapper = styled.div`
  height: 100vh;
  background-image: url("/images/hero.png"), url("/images/hero.png");
  background-repeat: no-repeat, no-repeat;
  /* background-position: top left, top right; */
  background-position-x: -170px, 1200px;
  background-position-y: top, top;
  background-size: 600px, right;
  background-attachment: scroll;
`;

export const content = styled.div`
  margin: 100px auto;
  max-width: 1200px;
  padding: 20px 20px;
`;

export const heroHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 68px;
  font-style: normal;
  margin-bottom: 50px;
  font-weight: var(--font-weight-bold);
  font-size: clamp(2.625rem, 8vw, 4.5rem);
`;

export const heroSubHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 21px;
  font-style: normal;
  font-weight: var(--font-weight-thin);
  line-height: 27.3px;
  font-size: 1.3125rem;
  line-height: 130%;
  margin: 3rem auto;
`;

export const buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    flex-direction: column;
    align-items: center;
  }
`;
