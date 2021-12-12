import React from "react";
import OpportunitiesRow from "@/components/Opportunities/OpportunitiesRow";
import { connect } from "react-redux";
import OpportunitiesRowHeading from "@/components/Opportunities/OpportunitiesRowHeading";
import { useRouter } from "next/router";

interface ActiveOppInterface {
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
    activeOpportunities: ActiveOppInterface[];
  };
}

type Props = {
  activeOpportunities: ActiveOppInterface[];
};

const ActiveOpportunities: React.FC<Props> = ({ activeOpportunities }) => {
  const router = useRouter();

  const navigateToSingleOpp = () => {
    router.push("/opportunities/single-opportunity-details");
  };

  const renderActiveOpps = activeOpportunities.map(
    (opp: ActiveOppInterface) => {
      return (
        <React.Fragment key={opp.id}>
          <div
            className="lg:mb-3 mb-6 cursor-pointer"
            onClick={() => navigateToSingleOpp()}
          >
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
      {renderActiveOpps}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  activeOpportunities: state.store.activeOpportunities,
});

export default connect(mapStateToProps)(ActiveOpportunities);
