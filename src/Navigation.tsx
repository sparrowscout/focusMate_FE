import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <NavigationBox>
      <div>
        <Link to={`chart`}>차트</Link>
      </div>
      <div>통계</div>
      <div>스터디 찾기</div>
      <div>내 스터디</div>
    </NavigationBox>
  );
}

const NavigationBox = styled.div`
  display: flex;
  gap: 20px;
`;

export default Navigation;
