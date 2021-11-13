import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #FFFFFF;
  border: 1px solid red;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 5px;
    color: #666;
    margin-top: 8px;
    border-bottom: 1px solid #333;
  }
`;
const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 15px;

  > label {
    display: flex;
    align-items: center;
    white-space: nowrap;

    > span {
      margin-right: 16px;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`

`;

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="input here"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>deleted</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>clear</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>ok</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;