import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { styled } from "src/theme";
import { Text, H1 } from "../components/Typography";

const PageTitle = styled(H1)`
  font-size: ${props => props.theme.fontSize(2)};
`;

const Wrapper = styled.div`
  padding: ${props => props.theme.space(3)};
`;

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Wrapper>
        <Text>
          text
        </Text>
        <PageTitle>
          H1
        </PageTitle>
      </Wrapper>
    </Layout>
  );
});

export default withIntl(IndexPage);
