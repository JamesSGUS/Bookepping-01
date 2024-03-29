import {useEffect, useState} from 'react';
import {createID} from 'lib/createID';
import {useUpdate} from 'hooks/useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags && localTags.length === 0) {
      localTags = [
        {id: createID(), name: '民事'},
        {id: createID(), name: '刑事'},
        {id: createID(), name: '知识产权'},
        {id: createID(), name: '国家赔偿'},
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => {
      return tag.id === id ? {id, name: name} : tag;
    }));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('New tag is:');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createID(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };
  return {tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};