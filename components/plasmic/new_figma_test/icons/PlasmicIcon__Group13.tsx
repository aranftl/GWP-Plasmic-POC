// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={"M22.16 22.16H2V2"}
        stroke={"currentColor"}
        strokeWidth={"2.4"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5.52 18.721l5.04-8 4.64 2.8 4.72-8.4"}
        stroke={"currentColor"}
        strokeWidth={"1.6"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
