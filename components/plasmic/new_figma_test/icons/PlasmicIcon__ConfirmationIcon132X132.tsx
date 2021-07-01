// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConfirmationIcon132X132IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConfirmationIcon132X132Icon(
  props: ConfirmationIcon132X132IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 46"}
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
          "M22.49 45.081c12.422 0 22.492-10.092 22.492-22.54C44.982 10.09 34.912 0 22.49 0S0 10.092 0 22.54c0 12.45 10.07 22.541 22.49 22.541zM10.292 22.395a2.652 2.652 0 00-.021 3.801l7.282 7.167a2.652 2.652 0 003.756-.037l14.873-15.219a2.652 2.652 0 00-.06-3.765l-.417-.401a2.652 2.652 0 00-3.737.063L20.39 25.9a1.326 1.326 0 01-1.892.01l-3.95-3.985a2.652 2.652 0 00-3.722-.044l-.535.514z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ConfirmationIcon132X132Icon;
/* prettier-ignore-end */
