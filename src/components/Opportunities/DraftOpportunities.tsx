import React from "react";
import { connect } from "react-redux";
import OpportunitiesRow from "@/components/Opportunities/OpportunitiesRow";
import OpportunitiesRowHeading from "@/components/Opportunities/OpportunitiesRowHeading";

interface DraftOppInterface {
  id: string | number;
  isChecked: boolean;
  name: string;
  applicantsApplied: string | number;
  fieldOfOccupation: string;
  oppDuration: string;
  oppCreated: string;
  oppStatus: string;
}

interface CPFromRedux {
  store: {
    draftOpportunities: DraftOppInterface[];
  };
}

type Props = {
  draftOpportunities: DraftOppInterface[];
};

const DraftOpportunities: React.FC<Props> = ({ draftOpportunities }) => {
  const renderDraftOpps = draftOpportunities.map((opp: DraftOppInterface) => {
    return (
      <React.Fragment key={opp.id}>
        <div className="lg:mb-3 mb-6">
          <OpportunitiesRow
            isOppSelected={opp.isChecked}
            oppName={opp.name}
            fieldOfOccupations={opp.fieldOfOccupation}
            applicantsApplied={opp.applicantsApplied}
            oppDuration={opp.oppDuration}
            oppDateCreated={opp.oppCreated}
            oppStatus={opp.oppStatus}
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <OpportunitiesRowHeading />
      {renderDraftOpps}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  draftOpportunities: state.store.draftOpportunities,
});

export default connect(mapStateToProps)(DraftOpportunities);
