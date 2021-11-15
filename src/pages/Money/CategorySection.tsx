import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

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
        background: #333;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const categoryMap = {'-': 'Expenses', '+': 'Income'};
  type Keys = keyof (typeof categoryMap)
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
            <li className={category === c ? 'selected' : ''}
                onClick={() => {setCategory(c);}}
            >{categoryMap[c]}
            </li>
          )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};