// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 18"}
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
          "M2 17.575V14.56C2 7.694 7.673 2 14.515 2 21.356 2 27.03 7.694 27.03 14.56v3.014"
        }
        stroke={"currentColor"}
        strokeWidth={"3.368"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
