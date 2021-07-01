// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 29"}
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
          "M5.5 2C3.6 2 2 3.6 2 5.5V27l5.1-1.8 5.1 1.8 5.1-1.8 5.1 1.8V5.5C22.4 3.6 24 2 25.9 2H5.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.5 10.5H6.3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12.2 16.2H6.3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
