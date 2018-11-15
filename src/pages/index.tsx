import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Box } from "../components/primitives";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Box
        bg="primary.main"
        color="common.white"
        p={3}
        width={[1/2, 1/4]}
      >
        test content of box
      </Box>
    </Layout>
  );
});

export default withIntl(IndexPage);
