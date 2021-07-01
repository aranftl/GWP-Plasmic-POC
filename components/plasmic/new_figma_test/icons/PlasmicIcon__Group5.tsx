// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 16"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 15.3V2h15.2c.6 0 1.2.2 1.5.6l3.4 3.3c.4.4.6.9.6 1.5v7.9"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 3.7v2.8h2.9c.6 0 .9-.8.5-1.2l-2.2-2.1c-.4-.4-1.2-.1-1.2.5z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path d={"M7.7 13.2h8.9z"} fill={"currentColor"}></path>

      <path
        d={"M7.7 13.2h8.9"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
      ></path>

      <path d={"M7.7 8.4h5.6z"} fill={"currentColor"}></path>

      <path
        d={"M7.7 8.4h5.6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
