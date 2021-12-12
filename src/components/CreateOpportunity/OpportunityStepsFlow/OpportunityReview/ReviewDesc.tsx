import React from "react";
import { connect } from "react-redux";

interface IEditorValue {
  __html: string;
}

interface ICPFromRedux {
  store: {
    createOpportunity: {
      oppDescription: IEditorValue;
    };
  };
}

type Props = {
  oppDescription: IEditorValue;
};

const ReviewDesc: React.FC<Props> = ({ oppDescription }) => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <h1 className="text-titles text-1xl">Opportunity Description</h1>
          <div
            className="desc-container mt-6"
            dangerouslySetInnerHTML={oppDescription}
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
  oppDescription: state.store.createOpportunity.oppDescription,
});

export default connect(mapStateToProps)(ReviewDesc);
