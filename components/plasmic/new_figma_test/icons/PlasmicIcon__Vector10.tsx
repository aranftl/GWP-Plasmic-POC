// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 75"}
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
          "M37.5 75C58.2 75 75 58.2 75 37.5S58.2 0 37.5 0 0 16.8 0 37.5 16.8 75 37.5 75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
