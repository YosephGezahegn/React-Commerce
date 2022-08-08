import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "border border-bluegray_100 border-solid",
  UnderLine: "border-b-[1px] border-bluegray_100 border-solid",
};

const sizes = {
  sm: "lg:pb-[19px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] pb-[34px] pt-[1px] px-[1px]",
  md: "xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] p-[17px] lg:p-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName}  ${variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineBluegray100", "UnderLine"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  variant: "OutlineBluegray100",
  size: "",
};

export { Input };
