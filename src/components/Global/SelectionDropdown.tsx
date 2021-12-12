import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import cn from "classnames";
// import Popup from "reactjs-popup";

type Props = {
  selectedItem?: string;
};

const SelectionDropdown: React.FC<Props> = ({ selectedItem = "" }) => {
  let [showSelections, setShowSelections] = useState<boolean>(false);
  const [selections, setSelections] = useState<string[]>([
    "Invited",
    "Accepted",
    "Rejected",
  ]);
  let [selectedSelection, setSelectedSelction] = useState<string>(selectedItem);
  // let [showInvitePopup, setShowInvitePopup] = useState<boolean>(false);
  // let [showAcceptPopup, setShowAcceptPopup] = useState<boolean>(false);
  // let [showRejectPopup, setShowRejectPopup] = useState<boolean>(false);

  const node = useRef<any>(null);

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowSelections(false);
  };
  const toggleDropdown = () => {
    setShowSelections((showSelections = !showSelections));
  };

  useEffect(() => {
    setSelections(selections);

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const changeSelection = (arg: string) => {
    setSelectedSelction((selectedSelection = arg));
    setShowSelections(false);
  };

  const renderSelections = selections.map(
    (selection: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="w-full mb-3">
            <button
              className="bg-transparent outline-none focus:outline-none"
              onClick={() => changeSelection(selection)}
            >
              <p className="text-secondary font-sans">{selection}</p>
            </button>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="relative" ref={node}>
        <button
          className={cn(
            "px-6 outline-none focus:outline-none bg-primary w-full justify-between h-1xl items-center text-white cool-transition",
            {
              "rounded-lg": !showSelections,
              "rounded-t-lg": showSelections,
              flex: selectedSelection === "",
              hidden: selectedSelection !== "",
            }
          )}
          onClick={toggleDropdown}
        >
          <span className="text-sm">Please select</span>
          <i
            className={cn("fas fa-chevron-down transform cool-transition", {
              "rotate-180": showSelections,
              "rotate-0": !showSelections,
            })}
          ></i>
        </button>
        <div
          className={cn("items-center", {
            flex: selectedSelection.toLocaleLowerCase() === "invited",
            hidden: selectedSelection.toLocaleLowerCase() !== "invited",
          })}
        >
          <h1 className="text-primary text-1xl">Invited</h1>
          <p className="font-sans text-sm text-secondary ml-3">14/08/2019</p>
        </div>
        <div
          className={cn("items-center", {
            flex: selectedSelection.toLocaleLowerCase() === "accepted",
            hidden: selectedSelection.toLocaleLowerCase() !== "accepted",
          })}
        >
          <h1 className="text-primary text-1xl">Accepted</h1>
          <p className="font-sans text-sm text-secondary ml-3">14/08/2019</p>
        </div>
        <div
          className={cn("items-center", {
            flex: selectedSelection.toLocaleLowerCase() === "rejected",
            hidden: selectedSelection.toLocaleLowerCase() !== "rejected",
          })}
        >
          <h1 className="text-primary text-1xl">Rejected</h1>
          <p className="font-sans text-sm text-secondary ml-3">14/08/2019</p>
        </div>
        <Transition
          show={showSelections}
          enter="transition duration-400 ease-out z-100"
          enterFrom="transform scale-95 opacity-0 z-100"
          enterTo="transform scale-100 opacity-100 z-100"
          leave="transition duration-400 ease-out z-100"
          leaveFrom="transform scale-00 opacity-100 z-100"
          leaveTo="transform scale-95 opacity-0 z-100"
        >
          <div className="px-6 py-4 shadow-main w-full flex flex-wrap rounded-b-lg absolute bg-white">
            {renderSelections}
          </div>
        </Transition>
      </div>
    </>
  );
};

export default SelectionDropdown;
