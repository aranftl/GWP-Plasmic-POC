// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsIcon(props: IconsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 8"}
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
        d={"M16 7l-5.453-5.09a3 3 0 00-4.094 0L1 7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default IconsIcon;
/* prettier-ignore-end */
