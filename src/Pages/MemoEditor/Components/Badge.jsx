import * as S from './Badge.styles';
import { closeSVG } from '../../../assets/svg';

const Badge = ({ name, onDelete, disabled }) => {
  return (
    <S.Component>
      {name}
      {!disabled && <S.DeleteButton src={closeSVG} onClick={onDelete} />}
    </S.Component>
  );
};

export default Badge;
