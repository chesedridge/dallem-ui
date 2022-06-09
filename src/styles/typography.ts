import styled from "styled-components";

export const Text = {
  H1: styled.h1`
    color: ${(props) => props.color};
    font-size: 2.8125rem;
    font-weight: bold;
    line-height: 3.4375rem;
    @media (max-width: 1024px) {
      font-size: 1.75rem;
      line-height: 2.3125rem;
    }
  `,
  H2: styled.h2`
    color: ${(props) => props.color};
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.375rem;
    @media (max-width: 1024px) {
      font-size: 1.25rem;
      line-height: 1.5625rem;
    }
  `,
  H3: styled.h3`
    color: ${(props) => props.color};
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 2.1875rem;
    @media (max-width: 1024px) {
      font-size: 1.0625rem;
      line-height: 1.4375rem;
      font-weight: 600;
    }
  `,
  H4: styled.h4`
    color: ${(props) => props.color};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.875rem;
    @media (max-width: 1024px) {
      font-size: 0.9375rem;
      line-height: 1.1875rem;
      font-weight: 600;
    }
  `,
  Body1: styled.p`
    color: ${(props) => props.color};
    font-size: 1.375rem;
    line-height: 1.5;
    @media (max-width: 1024px) {
      font-size: 0.9375rem;
    }
  `,
  Body2: styled.p`
    color: ${(props) => props.color};
    font-size: 1.125rem;
    line-height: 1.5;
    @media (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.4;
    }
  `,
  Caption1: styled.p`
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: 0.9375rem;
      line-height: 0.9375rem;
    }
  `,
  Caption2: styled.p`
    color: ${(props) => props.color};
    font-size: 0.875rem;
    line-height: 1.125rem;
    @media (max-width: 1024px) {
      line-height: 1.4;
      font-weight: bold;
    }
  `,
  Button: styled.p`
    color: ${(props) => props.color};
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.5625rem;
    @media (max-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.0625rem;
    }
  `,
};
