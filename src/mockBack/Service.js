const MEMO_LIST = 'memoList';

const contains = (arr, keywords) => {
  if (arr.length < keywords.length) return false;
  return keywords.reduce((res, keyword) => res && arr.includes(keyword), true);
};

export const memoService = {
  getMemoList: (searchKeyword = '', tagKeywords = []) => {
    let memoList = localStorage.getItem(MEMO_LIST);
    memoList = memoList ? JSON.parse(memoList) : [];

    if (searchKeyword !== '') {
      memoList = memoList.filter(({ title }) => title.toLowerCase().includes(searchKeyword.toLowerCase()));
    }

    if (tagKeywords.length > 0) {
      memoList = memoList.filter(({ tags }) => contains(tags, tagKeywords));
    }

    return new Promise((resolve, _) => {
      resolve({ data: memoList.map(({ id, title, tags }) => ({ id, title, tags })), error: '' });
    });
  },

  getAllTags: () => {
    let memoList = localStorage.getItem(MEMO_LIST);
    memoList = memoList ? JSON.parse(memoList) : [];

    let allTags = [
      ...memoList.reduce((acc, { tags }) => {
        tags.forEach(tag => acc.add(tag));
        return acc.add(...tags);
      }, new Set()),
    ];

    return new Promise((resolve, _) => {
      resolve({ data: allTags, error: '' });
    });
  },

  getMemo: memoId => {
    const memoList = JSON.parse(localStorage.getItem(MEMO_LIST));

    const memoIdx = memoList.findIndex(({ id }) => id === memoId);

    let response = {};
    if (memoIdx > -1) response = { data: memoList[memoIdx], error: '' };
    else response = { data: null, error: `can't find memo with id: ${memoId}` };

    return new Promise((resolve, _) => {
      resolve(response);
    });
  },

  addMemo: (title, tags, text) => {
    let memoList = JSON.parse(localStorage.getItem(MEMO_LIST));
    memoList = memoList ? memoList : [];

    let newId;
    if (memoList.length === 0) {
      memoList = [];
      newId = 1;
    } else {
      newId = memoList[0].id + 1;
    }

    let newMemo = {
      id: newId,
      title,
      tags,
      text,
    };
    memoList.unshift(newMemo);

    localStorage.setItem(MEMO_LIST, JSON.stringify(memoList));

    return new Promise((resolve, _) => {
      resolve({ data: newMemo, error: '' });
    });
  },

  updateMemo: (memoId, title, tags, text) => {
    const memoList = JSON.parse(localStorage.getItem(MEMO_LIST));

    const memoIdx = memoList.findIndex(({ id }) => id === memoId);
    let response = {};
    if (memoIdx > -1) {
      const memo = memoList[memoIdx];

      memo.title = title;
      memo.tags = tags;
      memo.text = text;

      response = { data: memo, error: '' };

      localStorage.setItem(MEMO_LIST, JSON.stringify(memoList));
    } else {
      response = { data: null, error: `can't find memo with id: ${memoId}` };
    }

    return new Promise((resolve, _) => {
      resolve(response);
    });
  },

  deleteMemo: memoId => {
    const memoList = JSON.parse(localStorage.getItem(MEMO_LIST));

    const memoIdx = memoList.findIndex(({ id }) => id === memoId);
    let response = {};
    if (memoIdx > -1) {
      memoList.splice(memoIdx, 1);

      response = { data: `success deleting memo with id: ${memoId}`, error: '' };

      localStorage.setItem(MEMO_LIST, JSON.stringify(memoList));
    } else {
      response = { data: null, error: `can't find memo with id: ${memoId}` };
    }

    return new Promise((resolve, _) => {
      resolve(response);
    });
  },
};
