import {NpsWrapper} from './NumberPadSection/NpsWrapper';
import {generateOutput} from './NumberPadSection/generateOutput';
import React, {useState} from 'react';


const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if (text === null) {return;}
    if (text === 'OK') {
      //Todo
      return;
    }
    if ('0123456789.'.split('').concat(['Delete', 'Clear']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
      switch (text) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (output === '0') {
            setOutput(text);
          } else {
            setOutput(output + text);
          }
          break;
        case '.':
          if (output.indexOf('.') >= 0) {return output;}
          setOutput(output + '.');
          break;
        case '删除':
          if (output.length === 1) {
            setOutput('');
          } else {
            setOutput(output.slice(0, -1) || '');
          }
          break;

        case '清空':
          setOutput('');
          break;
        default:
          return '';
      }
    }
  };

  return (
    <NpsWrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Delete</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>Clear</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </NpsWrapper>
  );
};
export {NumberPadSection};