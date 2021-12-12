import React from "react";
import TeamHeadingRow from "@/components/Team/TeamHeadingRow";
import TeamRow from "@/components/Team/TeamRow";
import { connect } from "react-redux";

interface ManagerInterface {
  managerImg: string;
  managerName: string;
  managerRole: string;
  managerDescription: string;
}

interface CPFromRedux {
  store: {
    successManager: ManagerInterface[];
  };
}

type Props = {
  successManagerInfo: ManagerInterface[];
};

const SuccessManager: React.FC<Props> = ({ successManagerInfo }) => {
  const renderSuccessManagerInfo = successManagerInfo.map(
    (info: ManagerInterface, index: number) => {
      return (
        <React.Fragment key={index}>
          <TeamRow
            teamMemberImg={info.managerImg}
            teamMemberName={info.managerName}
            teamMemberRole={info.managerRole}
            hasDescription
            description={info.managerDescription}
            hasTextInOptions
            hasEmail={false}
          />
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="lg:block hidden mb-6">
        <TeamHeadingRow hasDescription hasEmail={false}/>
      </div>
      {renderSuccessManagerInfo}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  successManagerInfo: state.store.successManager,
});

export default connect(mapStateToProps)(SuccessManager);
