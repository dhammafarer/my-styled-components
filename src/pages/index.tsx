import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Box, Flex, Card } from "../components/primitives";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Flex bg="pink" justifyContent="center" alignItems="center" style={{height: "300px"}}>
        <Card
          bg="common.white"
          flexDirection="column"
          shadow={2}
          width={[1/2]}
          border={2}
          borderColor="primary.dark"
          radius={3}
        >
          <Box bg="primary.light" width={[1]} px={2} py={3}>
            Title
          </Box>
          <Box bg="grey.800" width={[1]}px={2} py={3}>
            Image
          </Box>
        </Card>
      </Flex>
    </Layout>
  );
});

export default withIntl(IndexPage);
