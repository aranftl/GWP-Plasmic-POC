// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GetSupportIconOutlineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GetSupportIconOutlineIcon(
  props: GetSupportIconOutlineIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
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
        d={
          "M34.31 30.343H6.01C3.768 30.343 2 28.51 2 26.32V6.024C2 3.834 3.828 2 6.01 2h28.24c2.241 0 4.01 1.834 4.01 4.024V26.26c.059 2.308-1.71 4.083-3.95 4.083zm-14.147.001v8.106m-12.089 0h24.232"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18.157 12.117L24.23 16.2l-6.073 4.024v-8.107z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GetSupportIconOutlineIcon;
/* prettier-ignore-end */
