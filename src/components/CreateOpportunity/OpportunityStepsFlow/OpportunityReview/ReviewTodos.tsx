import React from "react";
import { connect } from "react-redux";

interface IEditorValue {
  __html: string;
}

interface ICPFromRedux {
  store: {
    createOpportunity: {
      whatToDo: IEditorValue;
    };
  };
}

type Props = {
  whatToDo: IEditorValue;
};

const ReviewTodos: React.FC<Props> = ({ whatToDo }) => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <h1 className="text-titles text-1xl">Here's What You'll Do</h1>
          <div
            className="todos-container mt-6"
            dangerouslySetInnerHTML={whatToDo}
          ></div>
        </div>
        <div className="w-full my-10">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  whatToDo: state.store.createOpportunity.whatToDo,
});

export default connect(mapStateToProps)(ReviewTodos);
