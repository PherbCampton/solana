import styled from "styled-components";

export const Wrapper = styled.div`
  border: 0;
  background: rgba(0, 0, 0, 0.28);
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #19161c;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    border: none;
  }
`;

export const Heading = styled.h5<{ bordercolor: string }>`
  border-left: 2px solid;
  padding-left: 15px;
  border-color: ${({ bordercolor }) => bordercolor};
  font-size: 1.75rem;
  line-height: 118%;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: #c4c4c4;
  font-size: 1.1rem;
  margin-bottom: 25px;
  font-weight: var(--font-weight-light);
`;

export const Tag = styled.p`
  color: #c4c4c4;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Value = styled.p`
  position: relative;
  line-height: 1 !important;
  padding-left: 10px;
  font-size: 1.75rem;
  margin-bottom: 8px;
  font-weight: var(--font-weight-thin);
  word-wrap: normal;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #1fcff1;
  }
`;
