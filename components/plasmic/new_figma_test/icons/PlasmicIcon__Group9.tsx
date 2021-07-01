// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M8.55 10.85c.6.6.6 1.7 0 2.3l-2.7 2.7c-.6.6-1.7.6-2.3 0l-2.1-2.1c-.6-.6-.6-1.7 0-2.3l2.7-2.7c.6-.6 1.7-.6 2.3 0m2.3-2.3c-.6-.6-.6-1.7 0-2.3l2.7-2.7c.6-.6 1.7-.6 2.3 0l2.1 2.1c.6.6.6 1.7 0 2.3l-2.7 2.7c-.6.6-1.7.6-2.3 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4.85 12.45l7.5-7.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
