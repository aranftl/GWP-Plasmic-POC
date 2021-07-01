// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 30"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.569 0h22.228c.867 0 1.568.692 1.568 1.546v25.93c0 .854-.701 1.547-1.567 1.547H1.568A1.557 1.557 0 010 27.477V1.546C0 .692.702 0 1.568 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
