// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
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
          "M37.5 0C58.2 0 75 16.8 75 37.5S58.2 75 37.5 75 0 58.2 0 37.5 16.8 0 37.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
