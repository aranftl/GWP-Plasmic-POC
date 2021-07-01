// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 10"}
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
        d={"M1 1l7.5 7L16 1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
