import { styled } from "styled-components";

export const wrapper = styled.div`

  .small-ring-container {
    margin-top: -70px;
    position: absolute;
    z-index: -1;
    top: -500px;
    left: -900px;
    width: 1200px;
    height: 1200px;
    overflow: clip;
    object-fit: contain;
    overflow-clip-margin: content-box;

    @media (min-width: 768px) {
      top: -150px;
      left: -850px;
    }
  }

  .small-ring {
    object-fit: contain;
    object-position: top;
  }
`;

export const BigRingContainer = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  top: 0;
  right: -1100px;
  width: 1600px;
  height: 1600px;
`;

export const BigRing = styled.img`
  height: 100%;
  width: 100%;
  size: 100vw;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: -340px;
  color: transparent;
  object-fit: contain;
  object-position: top;
  vertical-align: middle;
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
  max-width: 600px;
`;

export const buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: ;

  @media ${(p) => p.theme.breakpoints.xxAndSmaller} {
    flex-direction: column;
    align-items: center;
  }
`;