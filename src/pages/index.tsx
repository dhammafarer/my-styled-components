import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Button } from "../components/Box";
import { styled } from "src/theme";

const Wrapper = styled.div`
  padding: ${props => props.theme.space(3)};
  background: ${props => props.theme.colors.primary};
`;

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Wrapper>
        <Button bg={"blue"} px={3} py={2} onClick={() => console.log("button")}>
          hello
        </Button>
      </Wrapper>
    </Layout>
  );
});

export default withIntl(IndexPage);
