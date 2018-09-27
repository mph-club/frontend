import styled from 'styled-components';
import theme, { space, palette } from '../../../theme';

export const StyledUlWrapper = styled.div`
  margin-top: ${space[3]};
`

export const StyledUl = styled.ul`
  && {
    padding-left: ${space[3]};
    margin: 0;

    li {
      color: ${palette.grey03};
      font-size: 20px;
      margin-bottom: 16px;
    }

    li:last-child {
      margin-bottom: 0px;
    }

    div {
      color: ${palette.black};
    }
  }
`