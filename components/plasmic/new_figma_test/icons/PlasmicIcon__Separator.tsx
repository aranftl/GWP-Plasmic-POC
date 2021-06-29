// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SeparatorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SeparatorIcon(props: SeparatorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 191 1"}
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

      <path opacity={".2"} stroke={"currentColor"} d={"M0 .5h191"}></path>
    </svg>
  );
}

export default SeparatorIcon;
/* prettier-ignore-end */
