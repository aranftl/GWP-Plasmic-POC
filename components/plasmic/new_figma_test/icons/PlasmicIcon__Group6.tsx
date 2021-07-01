// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 38"}
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
        d={"M29.2 5.7v29.9H2V5.7h9.9c0-2 1.7-3.7 3.7-3.7s3.7 1.7 3.7 3.7h9.9z"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 5.7v5.9h15.1V5.7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20.9 19.8H10.3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20.9 25.5H10.3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
