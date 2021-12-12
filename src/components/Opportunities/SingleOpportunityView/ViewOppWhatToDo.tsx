import React from "react";

type Props = {
  whatToDoList: string[];
};

const ViewOppWhatToDo: React.FC<Props> = ({ whatToDoList }) => {
  const renderWhatToDoList = whatToDoList.map((item: string, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="w-full mb-6">
          <h1 className="text-secondary flex lg:items-center">
            <div>
              <span className="h-1 w-1 inline-block mr-3 rounded-full bg-primary"></span>
            </div>
            <span className="font-sans">{item}</span>
          </h1>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-wrap border-b border-secondary-elements mb-5 mt-10 pb-6">
        <h1 className="text-titles text-1xl w-full mb-5">
          Here's What You'll Do
        </h1>
        {renderWhatToDoList}
      </div>
    </>
  );
};

export default ViewOppWhatToDo;
