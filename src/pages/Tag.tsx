import React from 'react';
import {useTags} from 'hooks/useTags';
import {useHistory, useParams} from 'react-router-dom';
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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input type="text" placeholder="Tag name" label="标签名："
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteTag(tag.id)}>Delete Tags</Button>
      </Center>
    </div>
  );
  if (tag) {

  }
  const history = useHistory;
  const onClickBack = () => {
    window.history.back();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" className="frank" onClick={onClickBack}/>
        <span>Edit Tags</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>No tag ready</Center>}
    </Layout>
  );
};

export {Tag};