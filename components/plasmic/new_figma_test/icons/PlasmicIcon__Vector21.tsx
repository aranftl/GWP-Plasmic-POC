// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
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
        d={"M2.8 5.6a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
