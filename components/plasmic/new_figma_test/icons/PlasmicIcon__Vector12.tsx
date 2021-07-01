// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 9"}
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
          "M3.5 8.2C5.433 8.2 7 6.364 7 4.1 7 1.836 5.433 0 3.5 0S0 1.836 0 4.1c0 2.264 1.567 4.1 3.5 4.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
