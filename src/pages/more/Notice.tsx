import SlideBox from '@/components/more/SlideBox';
import StackHeader from '@/components/common/StackHeader';
import styled from 'styled-components';
import useNavigatePop from '@/hooks/useNavigatePop';

const Notice = () => {
  const navigatePop = useNavigatePop();
  return (
    <Container>
      <StackHeader
        options={{
          line: true,
          before: {
            iconOptions: {
              onClick: () => navigatePop('/more'),
            },
          },
        }}
      >
        공지사항
      </StackHeader>
      {[
        {
          id: 1,
          title: '앱 사용 설문 이벤트 진행',
          description:
            '안녕하세요 포커스메이트 앱 사용 설문조사를 진행합니다. 설문조사를 작성해주신 분 중 N분을 추첨하여 소정의 상품을 드릴 예정이니 많은 참여 부탁드립니다. 단 3분만 투자하시고 이벤트 상품 받아가세요!',
          date: '2023.03.01',
        },
        {
          id: 2,
          title: '포커스메이트 서비스 오픈 안내',
          description: `서비스 오픈 안내 입니다`,
          date: '2023.03.01',
        },
      ].map(item => {
        return <SlideBox key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Notice;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg.base};
`;
