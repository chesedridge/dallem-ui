import { typography } from "../../../src/styles/typography";
import styled from "styled-components";

export default function TypoExample() {
  const Wrapper = styled.ul`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css");
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
    list-style: none;
  `;

  const Title = styled.li`
    ${typography.title}
    color: white;
    line-height: 2.75rem;
    margin-bottom: 1rem;
  `;

  const HeadLine = styled.li`
    ${typography.headline}
    color: white;
    line-height: 1.875rem;
    margin-bottom: 1rem;
  `;

  const Body = styled.li`
    ${typography.body}
    color: white;
    line-height: 1rem;
    margin-bottom: 1rem;
  `;

  const SubHead = styled.li`
    ${typography.subhead}
    color: white;
    line-height: 0.875rem;
    margin-bottom: 1rem;
  `;

  const Caption = styled.li`
    ${typography.caption}
    color: white;
    line-height: 0.75rem;
    margin-bottom: 1rem;
  `;

  return (
    <Wrapper>
      <Title>Title, Black, 2.75rem</Title>
      <HeadLine>HeadLine, Extra Bold, 1.875rem</HeadLine>
      <Body>Body, Medium, 1rem</Body>
      <SubHead>SubHead, Bold, 0.875rem</SubHead>
      <Caption>Caption, Bold, 0.75rem</Caption>
    </Wrapper>
  );
}
