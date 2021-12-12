import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { Transition } from "@headlessui/react";

interface IDropdownInterface {
  id: string | number;
  title: string;
  icon: string;
}

type Props = {
  label?: string;
  lablelBg?: string;
  classNames?: string;
  icon?: string;
  dropDownData: IDropdownInterface[];
  selectedValues: IDropdownInterface[];
  changeSelectedValues: (arg: IDropdownInterface) => void;
  removeSelectedValue: (arg: number) => void;
};

const IconDropdown: React.FC<Props> = ({
  label,
  lablelBg = "bg-white",
  classNames,
  dropDownData,
  selectedValues,
  changeSelectedValues,
  removeSelectedValue,
}) => {
  let [showDropdown, toggleDropdown] = useState<boolean>(false);

  const setDropdown = () => {
    toggleDropdown((showDropdown = !showDropdown));
  };

  const setDropdownItem = (value: IDropdownInterface) => {
    changeSelectedValues(value);
  };

  const deletedSelectedValue = (index: number) => {
    removeSelectedValue(index);
  };

  const node = useRef<any>(null);

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const renderSelectedValues = selectedValues.map(
    (value: IDropdownInterface, index: number) => {
      return (
        <React.Fragment key={index}>
          <div
            className={cn(
              "flex items-center px-4 bg-primary rounded-lg h-8 mr-4",
              {
                "mb-4": selectedValues.length > 2,
                "sm:mb-0 mb-4": selectedValues.length < 2,
              }
            )}
          >
            <div>
              <img src={value.icon} alt="" />
            </div>
            <div className="mx-3">
              <p className="text-xs text-white">{value.title}</p>
            </div>
            <div>
              <button
                className="bg-transparent outline-none focus:outline-none pt-2"
                onClick={() => deletedSelectedValue(index)}
              >
                <img src="/img/icons/cross-icon-white.svg" alt="" />
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );

  const renderDropdownItems = dropDownData.map((item: IDropdownInterface) => {
    return (
      <React.Fragment key={item.id}>
        <div
          className="w-full py-4 px-6 cool-transition hover:bg-secondary-light flex bg-transparent items-center"
          onClick={() => setDropdownItem(item)}
        >
          <div className="pr-3 border-r border-secondary-elements">
            <img src={item.icon} alt="" />
          </div>
          <div className="pl-3">
            <p className="font-sans text-secondary">{item.title}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

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
            lablelBg
          )}
          style={{ top: "-6px" }}
        >
          {label}
        </label>
        <div
          className={cn(
            "bg-white min-h-52px w-full py-4 relative flex items-start px-6 overflow-hidden cursor-pointer border",
            {
              "rounded-lg": !showDropdown,
              "rounded-t-lg": showDropdown,
            }
          )}
        >
          <div className="w-full flex items-center flex-wrap relative z-50">
            {renderSelectedValues}
          </div>
          <div className="mt-2">
            <img
              src="/img/icons/chevron-icon.svg"
              alt=""
              className="w-4 h-4 transform -rotate-90"
            />
          </div>
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

export default IconDropdown;
