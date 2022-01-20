import styled from "styled-components";

export default function ColorGradation({ color }) {
  const Wrapper = styled.div`
    display: flex;
  `;
  const ColorBox = styled.div`
    flex: 1;
    height: 4rem;
  `;

  return (
    <Wrapper>
      <ColorBox style={{ backgroundColor: color[100] }} />
      <ColorBox style={{ backgroundColor: color[200] }} />
      <ColorBox style={{ backgroundColor: color[300] }} />
      <ColorBox style={{ backgroundColor: color[400] }} />
      <ColorBox style={{ backgroundColor: color[500] }} />
      <ColorBox style={{ backgroundColor: color[600] }} />
      <ColorBox style={{ backgroundColor: color[700] }} />
      <ColorBox style={{ backgroundColor: color[800] }} />
      <ColorBox style={{ backgroundColor: color[900] }} />
    </Wrapper>
  );
}
