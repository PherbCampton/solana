import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 1160px;
  padding: 0 10px;
`;

const IntegrationText = styled.p`
  font-size: 1rem;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  color: #618adc;
  margin-bottom: 32px;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    z-index: -1;
    position: relative;
    aspect-ratio: 24/10;
    margin: 0 10px;
    height: 40px;

    @media ${(p) => p.theme.breakpoints.lgAndSmaller} {
      aspect-ratio: 16/9;
    }
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CompanyIntegrations = () => {
  return (
    <Wrapper>
      <IntegrationText>
        powering tools and integrations from companies all around the world
      </IntegrationText>
      <Logos>
        <Group>
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrave.804b1c56.svg&w=750&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcircle.f3cc98eb.svg&w=1200&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscord.87aa9f77.svg&w=828&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.e500ae20.svg&w=750&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjump.930480b7.svg&w=1080&q=75"
            alt=""
          />
        </Group>
        <Group>
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flollapalooza.f4c99138.svg&w=828&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmagiceden.ebc6a3cc.svg&w=1200&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta.bbc99b74.svg&w=1200&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstepn.e6e296f7.svg&w=1080&q=75"
            alt=""
          />
          <img
            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.ae411f5c.svg&w=1200&q=75"
            alt=""
          />
        </Group>
      </Logos>
    </Wrapper>
  );
};

export default CompanyIntegrations;
