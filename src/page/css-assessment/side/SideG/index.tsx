import { Container } from "../../../../components";
import styled from "@emotion/styled";
import { getTheme } from "../../../../utils/getTheme";
import { ThemeProvider } from "@emotion/react";
import {
  AppStore,
  Facebook,
  GooglePlay,
  Instagram,
  Linkedin,
  Twitter,
  World,
  Youtube,
} from "./svg";
import { useIsMobile } from "../../../../hooks";
const Main = styled.div`
  min-height: 40vh;
  background: ${(props) => props.theme.background.primary};
  position: relative;
  * {
    color: ${(props) => props.theme.color.color};
  }
`;
const Grid = styled.div<{ isMobile?: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))"};
  padding-bottom: 16px;
  text-align: ${(props) => (props.isMobile ? "center" : "inherit")};
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;
const ListItem = styled.div<{ header?: boolean; padding?: string }>`
  padding: ${(props) => props.padding || "12px 0"};
  font-size: 16px;
  font-weight: ${(props) => (props.header ? "500" : "400")};
  color: ${(props) => (props.header ? "white" : props.theme.color.color)};
`;
const SocialIconContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: ${(props) => (props.isMobile ? "center" : "flex-start")};
`;
const HR = styled.hr`
  width: 100%;
  border-color: rgba(51, 65, 85, 1);
`;

const LastLine = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  align-items: center;
  padding: 24px 0;
  justify-content: space-between;
  justify-content: ${(props) => (props.isMobile ? "center" : "space-between")};
`;
const LastLineRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const theme = getTheme("rgba(226, 232, 240, 1)", "rgba(226, 232, 240, 1)", {
  backgroundPrimary: "rgba(15, 23, 42, 1)",
});
export const SideG = () => {
  const isMobile = useIsMobile();
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Container vertical>
          <Grid isMobile={isMobile}>
            <List>
              <ListItem header>Product</ListItem>
              <ListItem>Pricing</ListItem>
              <ListItem>Overview</ListItem>
              <ListItem>Browse</ListItem>
              <ListItem>Accessibility</ListItem>
              <ListItem>Five</ListItem>
            </List>
            <List>
              <ListItem header>Solutions</ListItem>
              <ListItem>Brainstorming</ListItem>
              <ListItem>Ideation</ListItem>
              <ListItem>Wireframing</ListItem>
              <ListItem>Research</ListItem>
              <ListItem>Design</ListItem>
            </List>
            <List>
              <ListItem header>Support</ListItem>
              <ListItem>Contact Us</ListItem>
              <ListItem>Developers</ListItem>
              <ListItem>Documentation</ListItem>
              <ListItem>Integrations</ListItem>
              <ListItem>Reports</ListItem>
            </List>
            <List>
              <ListItem header>Get the App</ListItem>
              <ListItem padding="12px 0 0 0">
                <AppStore height={40} />
              </ListItem>
              <ListItem padding="12px 0 0 0">
                <GooglePlay height={40} />
              </ListItem>
              <span style={{ flex: 1 }} />
              <ListItem>Follow Us</ListItem>
              <ListItem>
                <SocialIconContainer isMobile={isMobile}>
                  <Youtube />
                  <Facebook />
                  <Twitter />
                  <Instagram />
                  <Linkedin />
                </SocialIconContainer>
              </ListItem>
            </List>
          </Grid>
          <HR />
          <LastLine isMobile={isMobile}>
            <span>Collers @ 2023. All rights reserved.</span>
            <LastLineRightContainer>
              <span>Terms</span>
              <span>Privacy</span>
              <span>Contact</span>
              <LanguageContainer>
                <World />
                EN
              </LanguageContainer>
            </LastLineRightContainer>
          </LastLine>
        </Container>
      </Main>
    </ThemeProvider>
  );
};
