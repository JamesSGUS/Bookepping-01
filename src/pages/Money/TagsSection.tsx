import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

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


const TagsSection: React.FC = (props:any) => {
  let initialState;
  const [tags, setTags] = useState(['衣', '食', '住', '行']);
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}>{tag}</li>
        )}
      </ol>
      <button>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};