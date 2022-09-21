import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Input from "./Input";
import React, { useEffect, useState } from "react";

type DropDownProps = {
  alcohol: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  Selection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  alcohol,
  Selection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (alcohol: string): void => {
    Selection(alcohol);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <div className={showDropDown ? "dropdown" : "dropdown active"}>
      {alcohol.map((alcohol: string, index: number): JSX.Element => {
        return (
          <p
            key={index}
            onClick={(): void => {
              onClickHandler(alcohol);
            }}
          >
            {alcohol}
          </p>
        );
      })}
    </div>
  );
};
export default DropDown;
