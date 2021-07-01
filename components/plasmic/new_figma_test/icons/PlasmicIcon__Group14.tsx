// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 14"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 4.512C2 3.172 3.168 2 4.503 2h3.504v9.378H4.503C3.168 11.378 2 10.206 2 8.866V4.512zm28.12-2.511h3.504c1.335 0 2.503 1.172 2.503 2.512v4.354c0 1.34-1.168 2.512-2.503 2.512H30.12V2.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.368"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
