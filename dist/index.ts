import { Global, css } from '@emotion/react';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject$1;
var GlobalStyle = /*#__PURE__*/React.createElement(Global, {
  styles: css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      @import url(\"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css\");\n      html {\n        font-size: 12px;\n      }\n      body {\n        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,\n          Roboto, \"Helvetica Neue\", \"Segoe UI\", \"Apple SD Gothic Neo\",\n          \"Noto Sans KR\", \"Malgun Gothic\", sans-serif;\n      }\n      @media (min-width: 1024px) {\n        html {\n          font-size: 16px;\n        }\n      }\n    "])))
});

var color = {
  info: {
    100: "#C3EAFF",
    200: "#A4DCFB",
    300: "#8CD2F9",
    400: "#5EC0F5",
    500: "#0097E9",
    600: "#0082C9",
    700: "#006399",
    800: "#004469",
    900: "#002F48"
  },
  safe: {
    100: "#EAFBE7",
    200: "#C6F0C2",
    300: "#5CB176",
    400: "#328048",
    500: "#206A35",
    600: "#125E27",
    700: "#0A4F1E",
    800: "#054317",
    900: "#0C3A1F"
  },
  danger: {
    100: "#FFD0DB",
    200: "#F697AC",
    300: "#F5597C",
    400: "#E5234F",
    500: "#ED0035",
    600: "#D20432",
    700: "#AA0A2E",
    800: "#8D0A27",
    900: "#72061E"
  },
  button: {
    100: "#CADBF3",
    200: "#A6C8F5",
    300: "#74ACF8",
    400: "#408EF5",
    500: "#006AF8",
    600: "#005EDB",
    700: "#004AAD",
    800: "#003985",
    900: "#00275A"
  },
  oysterPink: {
    100: "#FFFBFA",
    200: "#FFF8F6",
    300: "#FFEFEB",
    400: "#F6DFD9",
    500: "#E9D0C9",
    600: "#E4C7BE",
    700: "#D8B6AC",
    800: "#CBA69A",
    900: "#C0968A"
  },
  harp: {
    100: "#FBFBFB",
    200: "#FBFBFA",
    300: "#FAFAF9",
    400: "#F3F3F0",
    500: "#ECEBE7",
    600: "#E5E4DC",
    700: "#DDD8D3",
    800: "#CECBBF",
    900: "#C5C2B7"
  },
  moodMist: {
    100: "#FFFCF8",
    200: "#FFFAF4",
    300: "#FFF6EB",
    400: "#FBEEDF",
    500: "#F0E1CF",
    600: "#DFD1C0",
    700: "#D4C0A9",
    800: "#C9AE90",
    900: "#BA9E7F"
  },
  sunset: {
    100: "#FFF9F0",
    200: "#FFF0DB",
    300: "#FFE9C9",
    400: "#FFDEAE",
    500: "#FED496",
    600: "#EDC487",
    700: "#D9AE6F",
    800: "#CCA162",
    900: "#B88E51"
  },
  fantasy: {
    100: "#FFFDFC",
    200: "#FFFCFB",
    300: "#FFFCFA",
    400: "#FFFAF5",
    500: "#FCF5EE",
    600: "#F2EBE4",
    700: "#E9E0D7",
    800: "#DBCFC4",
    900: "#C9BDB2"
  },
  riverBed: {
    100: "#E4F4FF",
    200: "#C0DCF0",
    300: "#90B4CE",
    400: "#6089A7",
    500: "#304B5F",
    600: "#1E394E",
    700: "#132C40",
    800: "#0B2234",
    900: "#071C2D"
  },
  sherbet: {
    100: "#FFF1EF",
    200: "#FFE2DE",
    300: "#FFD4CE",
    400: "#FFBCB2",
    500: "#FAA194",
    600: "#FF8C7B",
    700: "#FF7966",
    800: "#FF6752",
    900: "#FF553D"
  },
  red: {
    100: "#FCECEA",
    200: "#F5C0B8",
    300: "#EE5E52",
    400: "#D02B20",
    500: "#B72B1A",
    600: "#A11F0F",
    700: "#8E190B",
    800: "#7B1306",
    900: "#690E03"
  },
  blue: {
    100: "#F0F0FF",
    200: "#D9D8FF",
    300: "#7B79FF",
    400: "#4945FF",
    500: "#271FE0",
    600: "#1E16C6",
    700: "#110AB0",
    800: "#100A98",
    900: "#0C077D"
  },
  greyscale: {
    100: "#F1F1F3",
    200: "#EAEAEF",
    300: "#DCDCE4",
    400: "#C0C0CF",
    500: "#8E8EA9",
    600: "#666687",
    700: "#4A4A6A",
    800: "#32324D",
    900: "#212134"
  }
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var typography = {
  title: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-weight: 900;\n    font-size: 2.75rem;\n  "]))),
  headline: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-weight: 800;\n    font-size: 1.875rem;\n  "]))),
  body: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-weight: 500;\n    font-size: 1rem;\n  "]))),
  subhead: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-weight: 700;\n    font-size: 0.875rem;\n  "]))),
  caption: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-weight: 700;\n    font-size: 0.75rem;\n  "])))
};

export { GlobalStyle, color, typography };
