import * as S from './ActionButton.styles';

const ActionButton = ({ src, desc, onClick }) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <S.ButtonImage alt={desc} src={src} />
    </S.ButtonWrapper>
  );
};

export default ActionButton;
