// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.503 5.024a2.508 2.508 0 002.503-2.512A2.508 2.508 0 002.503 0 2.508 2.508 0 000 2.512a2.508 2.508 0 002.503 2.512z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
