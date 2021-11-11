import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.33%;
      padding: 4px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tags"/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money"/>
          <Link to="/money">支出</Link>
        </li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;