// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
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
          "M30 0c16.56 0 30 13.44 30 30 0 16.56-13.44 30-30 30C13.44 60 0 46.56 0 30 0 13.44 13.44 0 30 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
