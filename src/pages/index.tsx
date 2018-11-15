import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Box, Flex } from "../components/primitives";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Flex bg="pink" justifyContent="center" alignItems="center" style={{height: "300px"}}>
        <Box
          bg="primary.main"
          color="common.white"
          p={3}
          m={2}
          width={[1/2, 1/2]}
        >
          test content of box
        </Box>
        <Box
          bg="primary.light"
          color="common.white"
          p={3}
          m={2}
          width={[1/3, 1/3]}
        >
          test content of box
        </Box>
      </Flex>
    </Layout>
  );
});

export default withIntl(IndexPage);
