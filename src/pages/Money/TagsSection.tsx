import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-shrink: 1;
  overflow: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #c7dff3;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #ff5000;
      }
    }
  }

  > button {
    background: #ff5000;
    border: none;
    padding: 2px 5px;
    color: white;
    margin-top: 8px;
    margin-left: 39%;
    margin-bottom: 10px;
    //border-bottom: 1px solid #333;
  }
`;
type Props = {
  value: number [];
  onChange: (selected: number []) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagID: number) => {
    const index = selectedTagIds.indexOf(tagID);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagID));
    } else {
      props.onChange([...selectedTagIds, tagID]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <button onClick={addTag}>新增标签</button>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => { onToggleTag(tag.id); }
          } className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
    </Wrapper>
  );
};

export {TagsSection};