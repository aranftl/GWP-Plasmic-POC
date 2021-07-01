// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse111IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse111Icon(props: Ellipse111IconProps) {
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

      <circle cx={"30"} cy={"30"} r={"30"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse111Icon;
/* prettier-ignore-end */
