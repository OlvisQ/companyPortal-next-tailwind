import React from "react";
import { connect } from "react-redux";
import OpportunitiesRow from "@/components/Opportunities/OpportunitiesRow";
import OpportunitiesRowHeading from "@/components/Opportunities/OpportunitiesRowHeading";

interface ClosedOppInterface {
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
    closedOpportunities: ClosedOppInterface[];
  };
}

type Props = {
  closedOpportunities: ClosedOppInterface[];
};

const ClosedOpportunities: React.FC<Props> = ({ closedOpportunities }) => {
  const renderClosedOpps = closedOpportunities.map(
    (opp: ClosedOppInterface) => {
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
    }
  );

  return (
    <>
      <OpportunitiesRowHeading />
      {renderClosedOpps}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  closedOpportunities: state.store.closedOpportunities,
});

export default connect(mapStateToProps)(ClosedOpportunities);
