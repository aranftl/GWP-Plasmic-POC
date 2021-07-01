// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line272IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line272Icon(props: Line272IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1130 1"}
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
        opacity={".3"}
        stroke={"currentColor"}
        strokeWidth={".999"}
        d={"M0 .5h1129.33"}
      ></path>
    </svg>
  );
}

export default Line272Icon;
/* prettier-ignore-end */
