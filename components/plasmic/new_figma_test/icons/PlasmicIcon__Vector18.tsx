// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 20"}
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
        opacity={".2"}
        d={
          "M15.015 19.12V1M0 13.68l22.186-.008L0 13.678zm0-6.191l22.186-.008L0 7.489zm0-6.192l22.186-.007L0 1.297zM7.08 19.12V1v18.12z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.7"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
