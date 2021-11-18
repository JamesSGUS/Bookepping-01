import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';

type Params = {
  id: string;
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 14px;
  line-height: 20px;
  align-items: center;
`;
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>Edit Tags</span>
        <Icon/>
      </Topbar>
      <div>
        <label>
          <span>标签名：</span>
          <input type="text" placeholder="Tag name"/>
        </label>
      </div>
      <div>
        <Button>Delete Tags</Button>
      </div>
    </Layout>
  );
};

export {Tag};