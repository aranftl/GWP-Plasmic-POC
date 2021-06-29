// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayIcon(props: PlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={
          "M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.6 8.2A1 1 0 0010 9v6a1 1 0 001.6.8l4-3a.999.999 0 000-1.6l-4-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
