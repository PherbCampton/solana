import { styled } from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  background-image: url("./images/statistic-background.png");
`;

export const Maxwidth = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopContent = styled.div`
  margin: 100px auto;
  padding: 20px 20px;

  h2 {
    margin-bottom: 48px;
  }

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomContent = styled.div`
  margin: 100px auto;
  padding: 20px 20px;

  .tag {
    margin-bottom: 80px;
    padding-left: 10px;
  }

  .tag::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #1fcff1;
  }

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    display: flex;
  }
`;

export const StatisticsHeader = styled.h2`
  color: #fff;
  font-size: 42px;
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-size: 2.625rem;
  line-height: 110%;
  letter-spacing: -1px;

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    margin-top: 80px;

    .block {
      display: block;
    }
  }
`;
export const Colorful = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    width: 50%;
  }
`;

export const Figure = styled.h1<{ color: string }>`
  font-size: 70px;
  line-height: 120%;
  word-wrap: normal;
  background-clip: text;
  background: ${({ color }) => color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: var(--font-weight-light);

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    font-size: 110px;
  }
`;

export const Tag = styled.p`
  color: #c4c4c4;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .margin-top {
    margin-top: 80px;
  }

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    width: 70%;
    gap: 40px;
    flex-direction: row;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${(p) => p.theme.breakpoints.lgAndLarger} {
    gap: 20px;
  }
`;
