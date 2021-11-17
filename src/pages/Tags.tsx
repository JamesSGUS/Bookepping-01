import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

`;
const Space = styled.div`
  height: 16px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  color: white;
  border: none;
  border-radius: 4px;
  background: #f9ac2a;
`;

function Tags() {
  const {tags, setTags} = useTags();
  // @ts-ignore
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag.id}>
            <Link to={'/tags/' + tag}>
              <span className="oneLine">{tag}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>Adding Tags</Button>
      </Center>
    </Layout>
  );
}

export default Tags;