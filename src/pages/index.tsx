import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Box, Flex, Card, Text } from "../components/primitives";

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
            <Text letterSpacing={"tracked"} lineHeight={"copy"} textTransform={"uppercase"} as="h3" fontSize={[5]} fontWeight={5}>
              Heading
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
