import { GlobalStyle } from "../../../src/layouts/global";
import styled from "styled-components";

const PCText = {
  H1: styled.h1`
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 5.5rem;
  `,
  H2: styled.h2`
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 3.8rem;
  `,
  H3: styled.h3`
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 3.5rem;
  `,
  H4: styled.h4`
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3rem;
  `,
  Body1: styled.p`
    font-size: 2.2rem;
    line-height: 1.5;
  `,
  Body2: styled.p`
    font-size: 1.8rem;
    line-height: 1.5;
  `,
  Caption1: styled.p`
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
  `,
  Caption2: styled.p`
    font-size: 1.4rem;
    line-height: 1.8rem;
  `,
  Button: styled.p`
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.5rem;
  `,
};

const MobileText = {
  H1: styled.h1`
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3.7rem;
  `,
  H2: styled.h2`
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.5rem;
  `,
  H3: styled.h3`
    font-size: 1.7rem;
    line-height: 2.3rem;
    font-weight: 600;
  `,
  H4: styled.h4`
    font-size: 1.5rem;
    line-height: 1.9rem;
    font-weight: 600;
  `,
  Body1: styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
  `,
  Body2: styled.p`
    font-size: 1.4rem;
    line-height: 1.4;
  `,
  Caption1: styled.p`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
  `,
  Caption2: styled.p`
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 700;
  `,
  Button: styled.p`
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.7rem;
  `,
};

export default function TypoExample({ mobile }) {
  return !mobile ? (
    <section style={{ color: "white" }}>
      <GlobalStyle />
      <PCText.H1>
        H1
        <br />
        Bold / Size: 4.5rem / Height: 5.5rem
      </PCText.H1>
      <PCText.H2>
        H2
        <br />
        Bold / Size: 3.2rem / Height: 3.8rem
      </PCText.H2>
      <PCText.H3>
        H3
        <br />
        Bold / Size: 2.8rem / Height: 3.5rem
      </PCText.H3>
      <PCText.H4>
        H4
        <br />
        Bold / Size: 2.4rem / Height: 3rem
      </PCText.H4>
      <PCText.Body1>
        Body1
        <br />
        Regular / Size: 2.2rem / Height: 1.5 (150%)
      </PCText.Body1>
      <PCText.Body2>
        Body2
        <br />
        Regular / Size: 1.8rem / Height: 1.5 (150%)
      </PCText.Body2>
      <PCText.Caption1>
        Caption1
        <br />
        SemiBold / Size: 1.6rem / Height: 2rem
      </PCText.Caption1>
      <PCText.Caption2>
        Caption2
        <br />
        Regular / Size: 1.4rem / Height: 1.8rem
      </PCText.Caption2>
      <PCText.Button>
        Button
        <br />
        Bold / Size: 2rem / Height: 2.5rem
      </PCText.Button>
    </section>
  ) : (
    <section style={{ color: "white" }}>
      <GlobalStyle />
      <MobileText.H1>
        H1
        <br />
        Bold / Size: 2.8rem / Height: 2.7rem
      </MobileText.H1>
      <MobileText.H2>
        H2
        <br />
        Bold / Size: 2rem / Height: 2.5rem
      </MobileText.H2>
      <MobileText.H3>
        H3
        <br />
        SemiBold / Size: 1.7rem / Height: 2.3rem
      </MobileText.H3>
      <MobileText.H4>
        H4
        <br />
        SemiBold / Size: 1.5rem / Height: 1.9rem
      </MobileText.H4>
      <MobileText.Body1>
        Body1
        <br />
        Regular / Size: 1.5rem / Height: 1.5 (150%)
      </MobileText.Body1>
      <MobileText.Body2>
        Body2
        <br />
        Regular / Size: 1.4rem / Height: 1.4 (140%)
      </MobileText.Body2>
      <MobileText.Caption1>
        Caption1
        <br />
        Regular / Size: 1.5rem / Height: 1.5rem
      </MobileText.Caption1>
      <MobileText.Caption2>
        Caption2
        <br />
        Bold / Size: 1.4rem / Height: 1.4 (140%)
      </MobileText.Caption2>
      <MobileText.Button>
        Button
        <br />
        Bold / Size: 1.4rem / Height: 1.7rem
      </MobileText.Button>
    </section>
  );
}
