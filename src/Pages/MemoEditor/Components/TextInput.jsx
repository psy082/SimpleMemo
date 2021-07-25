import { useDispatch } from 'react-redux';
import { setText } from '../../../modules/memo/memoReducer';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextInput = ({ text, disabled }) => {
  const dispatch = useDispatch();

  const onChange = (event, editor) => {
    const data = editor.getData();
    dispatch(setText(data));
  };

  return <CKEditor editor={ClassicEditor} data={text} onChange={onChange} disabled={disabled} />;
};

export default TextInput;
