import React from "react";
import { FilterSwitchProps } from "../types";
import SkeletonImage from "./SkeletonImage";

const FilterSwitch: React.FC<FilterSwitchProps> = ({
  isfetching,
  label,
  className,
  style,
  onActionClick,
}) => {
  return (
    <>
      {isfetching ? (
        <SkeletonImage height="40px" width="inherit" borderradius="0" />
      ) : (
        <p className={className} onClick={onActionClick} style={style}>
          {label}
        </p>
      )}
    </>
  );
};

export default FilterSwitch;
