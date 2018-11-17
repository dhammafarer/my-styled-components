import * as React from "react";
import { withIntl } from "../i18n/withIntl";
import { Layout } from "../components/Layout";
import { Card, Flex } from "src/theme/primitives";
import { Button } from "../components/Button";

const IndexPage: React.SFC<{}> = (() => {
  return (
    <Layout>
      <Card
        m={3}
        bg="background.paper"
        style={{height: "300px"}}
        radius={2}
        shadow={1}
      >
        <Flex p={3} style={{flexGrow: 1}}>
          Title
        </Flex>
        <Flex  justifyContent="center" bg="background.default" spacing={2}>
          <Flex width={[1/4]}>
            <Button
              width={[1]}
              variant="primary"
              contained
            >
              OK
            </Button>
          </Flex>
          <Flex width={[1/4]}>
            <Button
              width={[1]}
              variant="secondary"
            >
              Cancel
            </Button>
          </Flex>
          <Flex width={[1/4]}>
            <Button
              width={[1]}
              contained
            >
              Cancel
            </Button>
          </Flex>
          <Flex width={[1/4]}>
            <Button
              width={[1]}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Layout>
  );
});

export default withIntl(IndexPage);
