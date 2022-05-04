import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Styles = {
  Wrapper: styled.div`
    display: flex;
    padding: 2rem;
    background: linear-gradient(
      to bottom,
      white 0%,
      white 50%,
      #1f2631 50%,
      #1f2631 100%
    );
    border-radius: 1rem;
  `,

  InfoBox: styled.div`
    position: fixed;
    text-align: center;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    transform: translate(25%, 50%);
  `,

  ColorBox: styled.div`
    background-color: ${(props) => props.color};
    flex: 1;
    height: 4rem;
  `,
};

export default function ColorGradation({ color }) {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const [hoveredColor, setColor] = useState(["", ""]);
  const [isHover, setHover] = useState(false);

  const infoBoxRef = useRef<HTMLDivElement>(null);

  const colorList = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const resetColor = () => {
    setColor(["", ""]);
    setHover(false);
  };

  const handleMouseMove = (event) => {
    const position = [event.clientY, event.clientX];
    setMousePosition(position);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Styles.Wrapper>
      {isHover && (
        <Styles.InfoBox
          ref={infoBoxRef}
          style={{
            top: mousePosition[0],
            left: mousePosition[1],
          }}
        >
          {hoveredColor[0]}
          <br />
          {hoveredColor[1]}
        </Styles.InfoBox>
      )}
      {colorList.map((value, index) => {
        const colorHEX = color[value];

        return (
          <Styles.ColorBox
            key={index.toString()}
            color={colorHEX}
            onMouseEnter={() => {
              setColor([value, colorHEX]);
              setHover(true);
            }}
            onMouseLeave={resetColor}
            onClick={() => {
              navigator.clipboard.writeText(colorHEX);
              alert("HEX 코드를 복사했습니다.");
            }}
          />
        );
      })}
    </Styles.Wrapper>
  );
}
