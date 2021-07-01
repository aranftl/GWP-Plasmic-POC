// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 22"}
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
        d={"M19.2 2H2v17.9h26.2V11"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
