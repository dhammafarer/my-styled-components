import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Box } from "../components/primitives";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Box
        bg="grey.A400"
        color="white"
        py={6}
        px={4}
      >
        test content of box
      </Box>
    </Layout>
  );
});

export default withIntl(IndexPage);
