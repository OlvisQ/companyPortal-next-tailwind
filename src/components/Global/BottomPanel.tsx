import React from "react";
import cn from "classnames";
import Button from "@/components/Global/Button";

type BottomPanelProps = {
  isOpen: boolean;
  panelTitle?: string;
  acceptBtnText: string;
  cancleBtnText?: string;
  onAccept?: () => void;
  onCancle?: () => void;
  hasCancleButton?: boolean;
};

const BottomPanel: React.FC<BottomPanelProps> = ({
  isOpen,
  acceptBtnText,
  cancleBtnText,
  onAccept,
  onCancle,
  panelTitle,
  hasCancleButton = true,
  children,
}) => {
  return (
    <>
      <div
        className={cn(
          "cool-transition fixed bg-secondary-light p-4 overflow-y-scroll rounded-t-4xl w-full left-0 flex flex-wrap",
          {
            "bottom-0": isOpen === true,
            "-bottom-full": isOpen === false,
          }
        )}
        style={{ minHeight: "380px", zIndex: 999999999 }}
      >
        <div className="w-full fixed left-0 right-0">
          <div className="bg-secondary-icon h-1 rounded-4xl w-10 mx-auto"></div>
          <p className="text-xs text-secondary text-center mt-3">
            {panelTitle}
          </p>
        </div>

        {children}

        <div className="w-full self-end flex items-center -mb-6">
          {hasCancleButton ? (
            <div className="w-1/3 mr-4">
              <button
                className="bg-transparent text-secondary outline-none focus:outline-none w-full"
                onClick={onCancle}
              >
                {cancleBtnText}
              </button>
            </div>
          ) : (
            <span></span>
          )}
          <div className="w-full">
            <Button text={acceptBtnText} onClick={onAccept} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomPanel;
