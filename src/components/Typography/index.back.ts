import { styled } from "../../theme";

const Text = styled.p`
  font-family: ${props => props.theme.fonts.sans};
  margin: 0;
  padding: 0;
`;

const Heading = styled.h1`
  font-family: ${props => props.theme.fonts.sans};
  margin: 0;
  padding: 0;
`;

export const Body = styled(Text)`
  font-size: ${props => props.theme.fontSizes[3]};
  line-height: ${props => props.theme.lineHeights[3]};
`;

export const H1 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[8]};
  line-height: ${props => props.theme.lineHeights[8]};
`;

export const H2 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[7]};
  line-height: ${props => props.theme.lineHeights[7]};
`;

export const H3 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[7]};
  line-height: ${props => props.theme.lineHeights[7]};
`;

export const H4 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[6]};
  line-height: ${props => props.theme.lineHeights[6]};
`;

export const H5 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights[5]};
`;

export const H6 = styled(Heading)`
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: ${props => props.theme.lineHeights[4]};
`;
