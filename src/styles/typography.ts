import styled from "styled-components";

export const Text = {
  H1: styled.h1`
    color: ${(props) => props.color};
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 5.5rem;
    @media (max-width: 920px) {
      font-size: 2.8rem;
      line-height: 3.7rem;
    }
  `,
  H2: styled.h2`
    color: ${(props) => props.color};
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 3.8rem;
    @media (max-width: 920px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  `,
  H3: styled.h3`
    color: ${(props) => props.color};
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 3.5rem;
    @media (max-width: 920px) {
      font-size: 1.7rem;
      line-height: 2.3rem;
      font-weight: 600;
    }
  `,
  H4: styled.h4`
    color: ${(props) => props.color};
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3rem;
    @media (max-width: 920px) {
      font-size: 1.5rem;
      line-height: 1.9rem;
      font-weight: 600;
    }
  `,
  Body1: styled.p`
    color: ${(props) => props.color};
    font-size: 2.2rem;
    line-height: 1.5;
    @media (max-width: 920px) {
      font-size: 1.5rem;
    }
  `,
  Body2: styled.p`
    color: ${(props) => props.color};
    font-size: 1.8rem;
    line-height: 1.5;
    @media (max-width: 920px) {
      font-size: 1.4rem;
      line-height: 1.4;
    }
  `,
  Caption1: styled.p`
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    @media (max-width: 920px) {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  `,
  Caption2: styled.p`
    color: ${(props) => props.color};
    font-size: 1.4rem;
    line-height: 1.8rem;
    @media (max-width: 920px) {
      line-height: 1.4;
      font-weight: 700;
    }
  `,
  Button: styled.p`
    color: ${(props) => props.color};
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.5rem;
    @media (max-width: 920px) {
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  `,
};
