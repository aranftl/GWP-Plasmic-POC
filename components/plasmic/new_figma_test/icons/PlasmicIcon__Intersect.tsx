// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IntersectIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IntersectIcon(props: IntersectIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 147"}
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
          "M0 137.8C200.169 51.308 449.587 0 720 0s519.83 51.309 720 137.8v9.2H0v-9.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IntersectIcon;
/* prettier-ignore-end */
