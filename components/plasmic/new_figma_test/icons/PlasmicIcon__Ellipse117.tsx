// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse117Icon(props: Ellipse117IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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

      <circle
        cx={"11"}
        cy={"11"}
        r={"10"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></circle>
    </svg>
  );
}

export default Ellipse117Icon;
/* prettier-ignore-end */
