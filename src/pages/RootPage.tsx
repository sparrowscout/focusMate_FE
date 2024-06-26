import Navigation from '@/components/Navigation';
import styled from 'styled-components';
import { AllStudies, Chart, More, MyStudy, TimerPage } from '.';

interface Props {
  page: string;
}

export default function RootPage(props: Props) {
  // mixpanel.identify('DEV_MODE');
  // mixpanel.track('page_view', { page: props.page });

  return (
    <Container>
      <Content>
        {props.page === 'timer' && <TimerPage />}
        {props.page === 'chart' && <Chart />}
        {props.page === 'mystudy' && <MyStudy />}
        {props.page === 'allstudies' && <AllStudies />}
        {props.page === 'more' && <More />}
      </Content>
      <Footer>
        <Navigation />
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.bg.base};
`;

const Footer = styled.div`
  height: 75px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.bg.base};
`;
