import React from "react";
import { css } from "@emotion/core";

const color = "white";

const Button = () => {
  return (
    <button
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </button>
  );
};

export default Button;
