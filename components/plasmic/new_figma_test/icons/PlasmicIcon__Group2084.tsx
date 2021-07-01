// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2084IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2084Icon(props: Group2084IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 30"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2.06 27.662h28.48"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M26.897 12.76v12.336M16.3 12.76v12.336M5.702 12.76v12.336"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M30.54 13.588H2.06M31.6 11.55L16.64 1.064c-.255-.085-.51-.085-.68 0L1 11.55"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.04 10.55c0-2.143-1.7-3.772-3.74-3.772s-3.74 1.715-3.74 3.772h7.48z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2084Icon;
/* prettier-ignore-end */
