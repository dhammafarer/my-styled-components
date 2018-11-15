import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Box, Flex, Card, Text } from "../components/primitives";
import { styled } from "src/theme";

const Heading = styled(Text)`
  font-size: ${props => props.theme.fontSize(5)};
  font-weight: ${props => props.theme.fontWeight(5)};
`

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Flex bg="pink" justifyContent="center" alignItems="center" style={{height: "300px"}}>
        <Card
          bg="common.white"
          flexDirection="column"
          shadow={2}
          border={2}
          borderColor="primary.dark"
          radius={3}
        >
          <Box px={3} py={3}>
            <Heading mb={1} fontSize={[4,5]}>
              Heading
            </Heading>
            <Text fontWeight={0} fontSize={[1]}>
              Subheading
            </Text>
          </Box>
          <Box bg="grey.800" width={[1]}px={3} py={3}>
            <Text>
              Text Body
            </Text>
          </Box>
        </Card>
      </Flex>
    </Layout>
  );
});

export default withIntl(IndexPage);
