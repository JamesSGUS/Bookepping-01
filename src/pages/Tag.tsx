import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

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
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
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
      <InputWrapper>
        <Input type="text" placeholder="Tag name" label="标签名：" value={tag.name}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>Delete Tags</Button>
      </Center>
    </Layout>
  );
};

export {Tag};