import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require( 'icons/tags.svg');
require( 'icons/money.svg');
require( 'icons/statistics.svg');

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
        width:24px;
        height:24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tags"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">支出</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistics"/>
          </svg>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;