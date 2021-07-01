// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse183IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse183Icon(props: Ellipse183IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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

      <circle
        cx={"2.221"}
        cy={"2.221"}
        r={"2.221"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse183Icon;
/* prettier-ignore-end */
