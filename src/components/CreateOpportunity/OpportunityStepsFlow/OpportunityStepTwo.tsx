import React, { useState } from "react";
import GetHiredTextEditor from "@/components/Global/GetHiredTextEditor";
import * as actions from "@/redux/actions/createOpportunityActions";
import { connect } from "react-redux";

interface ITextEditor {
  __html: string;
}

interface ICPFromRedux {
  store: {
    createOpportunity: {
      whatToDo: ITextEditor;
      oppDescription: ITextEditor;
    };
  };
}

type Props = {
  whatToDo: ITextEditor;
  oppDescription: ITextEditor;
  changeOppToDo: (arg: string) => void;
  changeOppDesc: (arg: string) => void;
};

const OpportunityStepTwo: React.FC<Props> = ({
  whatToDo,
  oppDescription,
  changeOppToDo,
  changeOppDesc,
}) => {
  const [oppToDo, setOppToDo] = useState<ITextEditor>(whatToDo);
  const [oppDesc, setOppDesc] = useState<ITextEditor>(oppDescription);

  const updateOppToDo = (e: any) => {
    setOppToDo({
      __html: e.target.innerHTML,
    });
    changeOppToDo(e.target.innerHTML);
  };

  const updateOppDesc = (e: any) => {
    setOppDesc({
      __html: e.target.innerHTML,
    });
    changeOppDesc(e.target.innerHTML);
  };

  return (
    <div className="xl:w-1/2 lg:w-3/4 w-full flex flex-wrap">
      <div className="w-full mb-6">
        <h1 className="text-titles text-3xl mb-3">Here's What You'll Do</h1>
        <p className="text-sm text-secondary font-sans">
          Please provide detailed information what Talent is going to do.
        </p>
      </div>
      <div className="w-full mb-20">
        <GetHiredTextEditor
          editorId="what-to-do"
          editorText={oppToDo}
          updateEditorValue={updateOppToDo}
        />
      </div>
      <div className="w-full mb-6">
        <h1 className="text-titles text-3xl mb-3">Opportunity Description</h1>
        <p className="text-sm text-secondary font-sans">
          Please provide detailed information about the opportunity.
        </p>
      </div>
      <div className="w-full">
        <GetHiredTextEditor
          editorId="opp-desc"
          editorText={oppDesc}
          updateEditorValue={updateOppDesc}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  whatToDo: state.store.createOpportunity.whatToDo,
  oppDescription: state.store.createOpportunity.oppDescription,
});

const mapDispatchToProps = {
  changeOppToDo: actions.updateOppWhatToDo,
  changeOppDesc: actions.updateOppDescription,
};

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityStepTwo);
