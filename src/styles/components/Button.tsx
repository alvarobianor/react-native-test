import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
  title: string;
  size?: number;
}
const ButtonContainer = styled.TouchableOpacity`
  margin-left: auto;
  align-items: center;
  justify-content: center;
  width: ${(props: {size: number}) => props.size || 120}px;
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

const PressableButton = ({onPress, title, size}: Props) => (
  <ButtonContainer onPress={onPress} size={size}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default PressableButton;
