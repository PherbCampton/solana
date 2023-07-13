import { useEffect, useState } from "react";
import * as S from "./Footer.styles";

const Footer = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Content>
          <S.Logo>
            <h3>Managed by</h3>
            <img src="./images/solanaFoundationLogo.svg" alt="" />
            <S.Socials>
              <S.Social>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.3 7.3c0-.2-.3-1.8-1-2.5-.9-1-1.9-1.1-2.4-1.1h-.1c-3.1-.2-7.7-.2-7.8-.2 0 0-4.7 0-7.8.2h-.1c-.5 0-1.5.1-2.4 1.1-.7.8-1 2.4-1 2.6 0 .1-.2 1.9-.2 3.8v1.7c0 1.9.2 3.7.2 3.8 0 .2.3 1.8 1 2.5.8.9 1.8 1 2.4 1.1h.3c1.8.2 7.3.2 7.5.2 0 0 4.7 0 7.8-.2h.1c.5-.1 1.5-.2 2.4-1.1.7-.8 1-2.4 1-2.6 0-.1.2-1.9.2-3.8v-1.7c.1-1.8-.1-3.7-.1-3.8zm-7.4 4.9-6 3.2c-.1 0-.1.1-.2.1s-.2 0-.2-.1c-.1-.1-.2-.2-.2-.4V8.5c0-.2.1-.3.2-.4s.3-.1.5 0l6 3.2c.2.1.3.2.3.4s-.2.4-.4.5z"></path>
                </svg>
              </S.Social>
              <S.Social>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 56.693 56.693"
                  fill="currentColor"
                >
                  <path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path>
                </svg>
              </S.Social>
              <S.Social>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 33.867 33.867"
                  fill="currentColor"
                >
                  <path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z"></path>
                </svg>
              </S.Social>
              <S.Social>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 56.7 56.7"
                >
                  <path d="M53.048 28.446a5.696 5.696 0 0 0-5.69-5.69 5.647 5.647 0 0 0-3.75 1.419c-3.763-2.408-8.784-3.925-14.322-4.089l3.389-11.59 8.32 1.546c0 .068-.014.132-.01.2a3.6 3.6 0 0 0 3.774 3.408 3.6 3.6 0 0 0 3.407-3.774 3.6 3.6 0 0 0-3.774-3.408 3.587 3.587 0 0 0-2.945 1.84l-.003-.001-10.026-1.863-3.993 13.64c-5.552.147-10.589 1.656-14.368 4.059a5.647 5.647 0 0 0-3.715-1.387 5.697 5.697 0 0 0-5.69 5.69c0 1.94.999 3.73 2.617 4.774a10.124 10.124 0 0 0-.155 1.73c0 8.212 9.956 14.894 22.194 14.894S50.5 43.162 50.5 34.949c0-.568-.052-1.128-.145-1.68a5.69 5.69 0 0 0 2.692-4.823zM17.76 32.318a3.496 3.496 0 1 1 6.993.002 3.496 3.496 0 0 1-6.993-.002zm18.79 9.458c-.104.108-2.613 2.661-8.283 2.661-5.7 0-7.98-2.588-8.073-2.698a.894.894 0 0 1 1.352-1.168c.052.056 1.954 2.079 6.72 2.079 4.85 0 6.976-2.095 6.998-2.115a.895.895 0 0 1 1.286 1.24zm-.695-5.961a3.496 3.496 0 1 1-.003-6.992 3.496 3.496 0 0 1 .003 6.992z"></path>
                </svg>
              </S.Social>
              <S.Social>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 0C10.747 0 0 11.017 0 24.607c0 10.873 6.877 20.097 16.413 23.35 1.2.228 1.64-.533 1.64-1.183 0-.587-.023-2.525-.033-4.581-6.677 1.488-8.086-2.904-8.086-2.904-1.092-2.844-2.665-3.6-2.665-3.6-2.177-1.528.165-1.496.165-1.496 2.41.173 3.679 2.535 3.679 2.535 2.14 3.762 5.614 2.675 6.984 2.046.215-1.59.837-2.676 1.523-3.29-5.33-.623-10.934-2.733-10.934-12.162 0-2.686.937-4.882 2.473-6.605-.25-.62-1.071-3.123.232-6.512 0 0 2.016-.661 6.602 2.522 1.914-.545 3.968-.818 6.007-.828 2.04.01 4.095.283 6.013.828 4.58-3.183 6.593-2.522 6.593-2.522 1.306 3.39.484 5.892.235 6.512 1.54 1.723 2.47 3.919 2.47 6.605 0 9.452-5.614 11.533-10.959 12.142.861.764 1.628 2.261 1.628 4.557 0 3.292-.027 5.942-.027 6.753 0 .655.432 1.422 1.648 1.18C41.132 44.697 48 35.476 48 24.607 48 11.017 37.255 0 24 0Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.09 35.331c-.053.123-.24.159-.411.075-.174-.08-.272-.247-.216-.37.052-.126.24-.16.414-.077.174.081.273.25.213.372ZM10.062 36.443c-.114.108-.338.058-.49-.114-.157-.172-.186-.401-.07-.511.118-.11.335-.058.492.113.157.174.188.402.068.512ZM11.008 37.86c-.146.105-.387.007-.536-.212-.147-.22-.147-.482.004-.587.149-.105.385-.01.536.207.147.222.147.485-.004.592ZM12.305 39.23c-.132.148-.412.108-.617-.095-.21-.198-.268-.48-.136-.629.133-.149.415-.107.621.094.209.198.272.482.132.63ZM14.093 40.024c-.058.193-.328.28-.6.199-.27-.085-.448-.31-.394-.505.057-.194.328-.286.602-.198.27.084.449.308.392.504ZM16.058 40.172c.006.203-.224.37-.51.374-.287.007-.519-.157-.522-.357 0-.205.226-.371.512-.376.286-.006.52.157.52.359ZM17.885 39.853c.034.198-.164.401-.447.455-.279.052-.537-.07-.572-.266-.035-.203.167-.407.445-.46.284-.05.538.07.574.27Z"
                  ></path>
                </svg>
              </S.Social>
              <S.Social>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path>
                </svg>
              </S.Social>
            </S.Socials>
            {isDesktop && (
              <S.RightsReserved>
                © 2023 Solana Foundation. All rights reserved.
              </S.RightsReserved>
            )}
          </S.Logo>
          <S.Rows>
            <S.Row>
              <ul>
                <h3>solana</h3>
                <li>grants</li>
                <li>break solana</li>
                <li>media kit</li>
                <li>careers</li>
                <li>disclaimer</li>
              </ul>
            </S.Row>
            <S.Rows  className="last-row">
              <S.Row>
                <ul>
                  <h3>get connected</h3>
                  <li>ecosystem</li>
                  <li>blog</li>
                  <li>newsletter</li>
                </ul>
              </S.Row>
              <S.Row>
                <S.Lang onClick={handleDropDown}>
                  <svg
                    height="20"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="globe"
                    role="img"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    ></path>
                  </svg>
                  EN
                  {isDropDownOpen ? (
                    <svg width="24" height="24">
                      <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M6.707 15.707a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.383-.03l6 5.5a1 1 0 1 1-1.352 1.474l-5.294-4.853-5.323 5.323Z"
                        ></path>
                      </g>
                    </svg>
                  ) : (
                    <svg width="24" height="24">
                      <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z"
                        ></path>
                      </g>
                    </svg>
                  )}
                </S.Lang>
              </S.Row>
            </S.Rows>
          </S.Rows>
        </S.Content>
        {!isDesktop && (
          <S.RightsReserved>
            © 2023 Solana Foundation. All rights reserved.
          </S.RightsReserved>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Footer;
