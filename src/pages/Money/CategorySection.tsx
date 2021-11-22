import styled from 'styled-components';
import React, {useState} from 'react';
import {Sglogo} from '../../components/Sglogo';
import img from '../../images/logo.jpg';

const Wrapper = styled.section`
  font-size: 24px;
  background: #c7dff3;
  position: relative;
  text-align: center;

  > ul {
    display: flex;

    > li {
      width: 50%;
      padding: 16px 0;
      text-align: center;
      position: relative;

      &.selected::after {
        content: "";
        display: block;
        position: absolute;
        height: 3px;
        background: #ff5000;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof (typeof categoryMap)
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
      <Sglogo>
        <img src={img} alt="img" className="center"/>
      </Sglogo>
    </Wrapper>

  );
};

export {CategorySection};