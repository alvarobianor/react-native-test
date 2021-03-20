import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
  title: string;
}
const ButtonContainer = styled.TouchableOpacity`
  margin-left: auto;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: #07d962;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

const PressableButton = ({onPress, title}: Props) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default PressableButton;
