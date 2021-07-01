// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group11Icon(props: Group11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 12"}
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
        d={"M3.1 0c0 1.7-1.4 3.1-3.1 3.1m0 5c1.7 0 3.1 1.4 3.1 3.1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
