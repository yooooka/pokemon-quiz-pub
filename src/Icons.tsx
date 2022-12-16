import { FC } from "react";

interface IconProps {
  filled?: boolean;
  fill?: string;
  viewBox?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
}

export const Next: FC<IconProps> = ({
  width = "24px",
  height = "24Px",
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
};
