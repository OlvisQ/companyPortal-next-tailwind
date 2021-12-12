import React, { useState } from "react";

type Props = {
  label?: string;
  placeHolder?: string;
  onInputChange?: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  onEnterPress?: (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  value?: string;
  errorMessage?: string;
  type?: string | (() => string);
  font?: string;
  readOnly?: boolean;
  isTextField?: boolean;
  isPassword?: boolean;
  classNames?: string;
  labelBg?: string;
  textCols?: number;
  textRows?: number;
};

const InputField: React.FC<Props> = ({
  label,
  placeHolder,
  onEnterPress,
  onInputChange,
  value,
  errorMessage,
  type,
  readOnly,
  isTextField = false,
  isPassword = false,
  classNames,
  labelBg = "bg-white",
  textCols = 30,
  textRows = 9,
}) => {
  // @ts-ignore
  const [getType, setType] = useState<string>(type);

  const togglePassword = () => {
    if (getType === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  if (isTextField) {
    return (
      <React.Fragment>
        <div className={"w-full relative " + classNames}>
          <label
            className={
              "uppercase sm:text-xs text-xss text-secondary text-left z-50 absolute ml-5 " +
              labelBg
            }
            style={{ top: "-6px" }}
          >
            {label}
          </label>
          <textarea
            placeholder={placeHolder}
            value={value}
            onChange={onInputChange}
            onKeyDown={onEnterPress}
            className="w-full px-5 py-5 border rounded-lg focus:bg-white focus:ring-primary focus:ring-1 focus:outline-none text-secondary font-sans placeholder-secondary-icon"
            readOnly={readOnly}
            cols={textCols}
            rows={textRows}
            maxLength={500}
          ></textarea>
          <label className="text-xs absolute right-5 bottom-5 text-secondary">
            {value?.length}/500
          </label>
        </div>
      </React.Fragment>
    );
  } else if (isPassword) {
    return (
      <React.Fragment>
        <div className={"w-full relative " + classNames}>
          <label
            className={
              "uppercase sm:text-xs text-xss text-secondary text-left z-50 absolute ml-5 " +
              labelBg
            }
            style={{ top: "-6px" }}
          >
            {label}
          </label>
          <input
            type={getType}
            placeholder={placeHolder}
            value={value}
            onChange={onInputChange}
            onKeyDown={onEnterPress}
            className="w-full px-5 border rounded-lg mb-2 focus:bg-white focus:ring-primary focus:ring-1 focus:outline-none text-secondary font-sans placeholder-secondary-icon"
            style={{ height: "52px" }}
            readOnly={readOnly}
          />
          <button
            className="bg-transparent outline-none focus:outline-none absolute right-5 top-4"
            onClick={togglePassword}
          >
            <img src="/img/icons/show-password.svg" alt="" />
          </button>
          <span className="text-red-600 w-full mb-8 text-xs">
            {errorMessage}
          </span>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={"w-full relative " + classNames}>
          <label
            className={
              "uppercase sm:text-xs text-xss text-secondary text-left absolute ml-5 " +
              labelBg
            }
            style={{ top: "-6px", zIndex: 99999 }}
          >
            {label}
          </label>
          <input
            type={getType}
            placeholder={placeHolder}
            value={value}
            onChange={onInputChange}
            onKeyDown={onEnterPress}
            className="w-full px-5 border rounded-lg mb-2 focus:bg-white focus:ring-primary focus:ring-1 focus:outline-none text-secondary font-sans placeholder-secondary-icon"
            style={{ height: "52px" }}
            readOnly={readOnly}
          />
          <span className="text-red-600 w-full mb-8 text-xs">
            {errorMessage}
          </span>
        </div>
      </React.Fragment>
    );
  }
};

export default InputField;
