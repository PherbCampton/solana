import { styled } from "styled-components";

export const Wrapper = styled.div`
  font-size: 1rem;
  margin-top: 5rem;
  padding: 5rem 0;
  background-color: #000508;
  color: #fff;
  background-image: radial-gradient(
    farthest-corner at bottom right,
    #3a233f,
    transparent 250px
  );
  border: 1px solid #141414;
  border-radius: 12px 12px 0 0;

  @media (min-width: 768px) {
    background-image: radial-gradient(
        farthest-side at bottom left,
        #271d3b,
        transparent 900px
      ),
      radial-gradient(
        farthest-corner at bottom right,
        #3a233f,
        transparent 1000px
      );
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Logo = styled.div`
  align-items: center;
  justify-content: space-between;

  img {
    width: 210px;
    height: 56px;
    fill: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const Social = styled.a`
  background: #848895;
  display: inline-flex;
  padding: 5px;
  border-radius: 50%;
  margin-right: 10px;

  svg {
    fill: #111;
  }
`;

export const RightsReserved = styled.p`
  color: #848895;

  @media (max-width: 1024px) {
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    border-top: 1px solid #848895;
    max-width: 680px;
    padding: 20px 20px 0 20px;
  }
`;

export const Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: start;

  .last-row {
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  h3 {
    text-transform: uppercase;
    font-weight: var(--font-weight-thin);
    font-size: 16px;
  }

  li {
    text-transform: capitalize;
    color: #848895;
    padding: 6px 0;
    list-style: none;
    display: inline=block;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Lang = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  color: #848895;
  background: transparent;
  border: none;
`;
