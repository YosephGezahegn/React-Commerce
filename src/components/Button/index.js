import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray800: "bg-gray_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_800",
  OutlineBluegray100: "border border-bluegray_100 border-solid text-gray_800",
  OutlineGray800: "border border-gray_800 border-solid text-gray_800",
};
const sizes = {
  sm: "2xl:p-[10px] 3xl:p-[12px] p-[14px] lg:p-[8px] xl:p-[9px]",
  md: "lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px]",
  lg: "lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] p-[34px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "FillGray800",
    "FillWhiteA700",
    "OutlineBluegray100",
    "OutlineGray800",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = { className: "", variant: "FillGray800", size: "sm" };

export { Button };
