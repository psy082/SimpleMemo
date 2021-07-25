import { useState } from 'react';

const useTags = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const onClick = tagName => {
    let idx = -1;
    if ((idx = selectedTags.indexOf(tagName) > -1)) {
      setSelectedTags([...selectedTags.splice(idx, 1)]);
    } else {
      setSelectedTags([...selectedTags, tagName].sort());
    }
  };

  return { selectedTags, onClick };
};

export default useTags;