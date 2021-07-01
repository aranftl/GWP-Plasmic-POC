// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 7"}
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
          "M11.844 5.854V.602c0-.332.274-.602.612-.602h.572c.338 0 .612.27.612.603v5.252a.608.608 0 01-.612.603h-.572a.607.607 0 01-.612-.604zM0 5.854V.602C0 .27.274 0 .612 0h.572c.338 0 .612.27.612.603v5.252a.608.608 0 01-.612.603H.612A.607.607 0 010 5.854z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
