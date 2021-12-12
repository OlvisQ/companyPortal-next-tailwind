import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { Transition } from "@headlessui/react";

type Props = {
  dropDownData: any[];
  selectedItem: (arg: string) => void;
  selectedValue: string;
  label?: string;
  labelBg?: string;
  classNames?: string;
};

const DropdownSelect: React.FC<Props> = ({
  dropDownData,
  selectedItem,
  selectedValue,
  label = "title",
  labelBg = "bg-white",
  classNames,
}) => {
  let [showDropdown, toggleDropdown] = useState(false);

  const setDropdown = () => {
    toggleDropdown((showDropdown = !showDropdown));
  };

  const node = useRef<any>(null);

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleDropdown(false);
  };

  const setDropdownItem = (value: string) => {
    selectedItem(value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const renderDropdownItems = dropDownData.map(
    (item: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <div
            className="font-sans text-secondary w-full py-4 px-6 cool-transition hover:bg-secondary-light"
            onClick={() => setDropdownItem(item)}
          >
            {item}
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div
        className={cn("relative cursor-pointer", classNames)}
        onClick={setDropdown}
        ref={node}
      >
        <label
          className={cn(
            "uppercase text-xs text-secondary text-left z-50 absolute ml-5",
            labelBg
          )}
          style={{ top: "-6px" }}
        >
          {label}
        </label>
        <div
          className={cn(
            "bg-white h-52px w-full relative flex items-center px-6 overflow-hidden cursor-pointer border",
            {
              "rounded-lg": !showDropdown,
              "rounded-t-lg": showDropdown,
            }
          )}
        >
          <div className="flex-1 font-sans text-secondary md:text-base text-sm truncate">
            {selectedValue}
          </div>
          <img
            src="/img/icons/chevron-icon.svg"
            alt=""
            className="w-4 h-4 transform -rotate-90"
          />
        </div>
        <Transition
          show={showDropdown}
          enter="transition duration-400 ease-out z-100"
          enterFrom="transform scale-95 opacity-0 z-100"
          enterTo="transform scale-100 opacity-100 z-100"
          leave="transition duration-400 ease-out z-100"
          leaveFrom="transform scale-00 opacity-100 z-100"
          leaveTo="transform scale-95 opacity-0 z-100"
        >
          <div
            className="bg-white border-l border-r border-b flex flex-wrap rounded-b-lg global-dropdown absolute w-full z-100"
            style={{ marginTop: "0.4px" }}
          >
            {renderDropdownItems}
          </div>
        </Transition>
      </div>
    </>
  );
};

export default DropdownSelect;
