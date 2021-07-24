import { memoController } from '../mockBack/Controller';

const memoAPI = {
  getMemoList: async param => await memoController.getList(param),

  getAllTags: async () => await memoController.getAllTags(),

  getMemo: async id => await memoController.get(id),

  addMemo: async (title, tags, text) => await memoController.add(title, tags, text),

  updateMemo: async (id, title, tags,  text) => await memoController.update(id, title, tags, text),

  deleteMemo: async id => await memoController.delete(id),
};

export default memoAPI;
