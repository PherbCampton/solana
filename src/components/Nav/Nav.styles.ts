import { styled } from "styled-components";

export const wrapper = styled.div`
z-index: 1;
position: sticky;
top:0;
background: rgba(0,0,0,.95);
`

export const content = styled.div`
margin: 0 auto;
max-width: 1200px;
display: flex;
padding: 20px 20px;
z-index: 3999;
align-items: center;
justify-content: space-between;
`