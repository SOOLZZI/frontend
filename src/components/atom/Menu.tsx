import React, { useState } from "react";
import DropDown from "./DropDown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("");
  const degree = () => {
    return ["낮음", "중간", "높음"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const Selection = (degree: string): void => {
    setSelect(degree);
  };

  return (
    <>
      <div className=""></div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="border-b border-solid border p-2 rounded-lg">
          {select ? "알코올 도수: " + select : "알코올 도수"}{" "}
        </div>
        {showDropDown && (
          <DropDown
            alcohol={degree()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            Selection={Selection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
