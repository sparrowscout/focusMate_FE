import styled from 'styled-components';

interface CharacterPickUpCounterProps {
  count: number;
}

const CharacterPickUpCounter: React.FC<CharacterPickUpCounterProps> = ({
  count,
}) => {
  return (
    <PickCounter>
      모은캐릭터 <PickNow>{count}</PickNow>
      <Split>/</Split>
      <PickAll>11</PickAll>
    </PickCounter>
  );
};

export default CharacterPickUpCounter;

const PickCounter = styled.div`
  width: 160px;
  height: 48px;
  background-color: #e9faf7;
  color: ${({ theme }) => theme.colors.grey[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 16px;
  font-family: ${({ theme }) => theme.fonts.spoqa.medium};
  margin: 32px auto 0;
`;

const PickNow = styled.div`
  font-family: ${({ theme }) => theme.fonts.spoqa.bold};
  color: ${({ theme }) => theme.colors.primary[900]};
`;

const Split = styled.div`
  color: ${({ theme }) => theme.colors.grey[500]};
`;

const PickAll = styled.div`
  color: ${({ theme }) => theme.colors.grey[500]};
`;
