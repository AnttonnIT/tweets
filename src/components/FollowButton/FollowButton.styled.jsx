import styled from '@emotion/styled';
import { Button } from 'shared/styles/SharedStyles';

export const StyledFollowButton = styled(Button)`
  background-color: ${props => (props.background ? '#5CD3A8' : '#EBD8FF')};
`;
