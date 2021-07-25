import * as S from './ActionButton.styles';

const ActionButton = ({ src, onClick }) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <S.ButtonImage src={src} />
    </S.ButtonWrapper>
  );
};

export default ActionButton;
