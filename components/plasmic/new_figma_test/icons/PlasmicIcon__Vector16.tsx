// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 31"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M24.581 1.546c.433 0 .784.346.784.773v25.934a.779.779 0 01-.784.773H2.352a.779.779 0 01-.784-.773V2.32c0-.427.351-.773.784-.773h22.23zm0-1.546H2.352C1.053 0 0 1.039 0 2.319v25.934c0 1.28 1.053 2.319 2.352 2.319h22.23c1.298 0 2.351-1.038 2.351-2.319V2.32c0-1.281-1.053-2.32-2.352-2.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
