import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: black;
`
const HeaderUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const HeaderLi = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 13px;
`

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <HeaderUl>
        <HeaderLi>로그인</HeaderLi>
        <HeaderLi>회원가입</HeaderLi>
        <HeaderLi>내클래스</HeaderLi>
      </HeaderUl>
    </HeaderContainer>
  );
}
