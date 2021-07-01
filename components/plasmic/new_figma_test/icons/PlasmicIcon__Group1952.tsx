// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1952IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1952Icon(props: Group1952IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 27"}
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
        d={"M1 15.351C1 9.624 5.877 5.008 11.926 5.008"}
        stroke={"currentColor"}
        strokeWidth={"1.6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7.813 2l4.114 2.883-3.045 3.895"}
        stroke={"currentColor"}
        strokeWidth={"2.374"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.36 6.41c5.246 2.864 7.037 9.175 4.012 14.142"}
        stroke={"currentColor"}
        strokeWidth={"1.6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M25.84 18.527l-4.823 1.968-2.079-4.487"}
        stroke={"currentColor"}
        strokeWidth={"2.374"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.295 24.47c-5.247 2.805-11.914.993-14.877-3.974"}
        stroke={"currentColor"}
        strokeWidth={"1.6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M1.926 25.073l.624-4.577 4.834.59"}
        stroke={"currentColor"}
        strokeWidth={"2.374"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group1952Icon;
/* prettier-ignore-end */
