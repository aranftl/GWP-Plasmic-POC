// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegendMarkersDotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegendMarkersDotIcon(props: LegendMarkersDotIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M4.753 9.515a4.755 4.755 0 004.754-4.758A4.755 4.755 0 004.753 0 4.755 4.755 0 000 4.757a4.755 4.755 0 004.753 4.758z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LegendMarkersDotIcon;
/* prettier-ignore-end */
