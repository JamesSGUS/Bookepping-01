import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
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

const NoteSection: React.FC = () => {
  let initialState;
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if( refInput.current !== null ){
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注:</span>
        <input type="text" placeholder="input here"
               defaultValue={note}
               ref={refInput}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};
export {NoteSection};