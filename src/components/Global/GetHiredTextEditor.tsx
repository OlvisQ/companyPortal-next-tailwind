import React, { useEffect, useState } from "react";

interface IEditor {
  __html: string;
}

type Props = {
  editorText: IEditor;
  updateEditorValue: React.FormEventHandler<HTMLDivElement> | undefined;
  editorId: string;
};

const GetHiredTextEditor: React.FC<Props> = ({
  editorText,
  updateEditorValue,
  editorId,
}) => {
  let [editorValue, setEditorValue] = useState<IEditor>({
    __html: editorText.__html,
  });

  useEffect(() => {
    setEditorValue(editorValue);

    if (
      document.getElementById(editorId) !== null ||
      document.getElementById(editorId) !== undefined
    ) {
      // @ts-ignore
      document.getElementById(editorId).innerHTML = editorValue.__html;
    }
  }, [editorValue]);

  const textBold = () => {
    document.execCommand("bold", false);
  };

  const textItalic = () => {
    document.execCommand("italic", false);
  };

  const textHeadingOne = () => {
    document.execCommand("formatBlock", true, "<H1>");
  };

  const underOrderedList = () => {
    document.execCommand("insertUnorderedList", false, "NewUL");
  };

  const orderedList = () => {
    document.execCommand("insertOrderedList", false, "NewOL");
  };

  const undo = () => {
    document.execCommand("undo");
  };

  const redo = () => {
    document.execCommand("redo");
  };

  return (
    <>
      <div className="border border-secondary-elements rounded-xl relative">
        <div className="flex justify-between bg-secondary-light2 h-16 rounded-t-xl items-center px-4">
          <div className="flex space-x-4 md:w-auto w-full md:justify-start justify-between">
            <button
              className="bg-white rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center"
              onClick={textBold}
            >
              <img src="/img/icons/bold-icon.svg" alt="" />
            </button>
            <button
              className="bg-white rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center"
              onClick={textItalic}
            >
              <img src="/img/icons/italic-icon.svg" alt="" />
            </button>
            <button
              className="bg-white rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center text-1xl text-titles"
              onClick={textHeadingOne}
            >
              H1
            </button>
            <button
              className="bg-white rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center text-1xl"
              onClick={underOrderedList}
            >
              <img src="/img/icons/list-icon.svg" alt="" />
            </button>
            <button
              className="bg-white rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center text-1xl"
              onClick={orderedList}
            >
              <img src="/img/icons/number-list-icon.svg" alt="" />
            </button>
          </div>
          <div className="md:flex hidden items-center">
            <button
              className="bg-transparent rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center"
              onClick={undo}
            >
              <img src="/img/icons/undo-icon.svg" alt="" />
            </button>
            <div className="border border-white mx-4 h-8"></div>
            <button
              className="bg-transparent rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center"
              onClick={redo}
            >
              <img src="/img/icons/redo-icon.svg" alt="" />
            </button>
          </div>
        </div>
        <div
          id={editorId}
          contentEditable
          onInput={updateEditorValue}
          className="h-profile-height-desktop overflow-y-auto rounded-b-xl bg-white px-6 py-4 outline-none focus:outline-none ring-0 ring-offset-transparent focus:ring-0 focus:ring-offset-transparent font-sans text-secondary text-editor"
          dangerouslySetInnerHTML={editorValue}
          data-placeholder="Hello"
        ></div>
        <button className="bg-transparent outline-none focus:outline-none absolute right-4 bottom-4 z-20">
          <img src="/img/icons/full-screen-icon.svg" alt="" />
        </button>
      </div>
      <div className="w-full md:hidden flex items-center justify-center mt-2">
        <button
          className="bg-transparent rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center"
          onClick={undo}
        >
          <img src="/img/icons/undo-icon.svg" alt="" />
        </button>
        <div className="border border-white mx-4 h-8"></div>
        <button
          className="bg-transparent rounded-lg outline-none focus:outline-none h-10 w-10 flex justify-center items-center"
          onClick={redo}
        >
          <img src="/img/icons/redo-icon.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default GetHiredTextEditor;
