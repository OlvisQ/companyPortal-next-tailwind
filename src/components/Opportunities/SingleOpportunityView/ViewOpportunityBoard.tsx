import React from "react";
import ViewOppHeader from "@/components/Opportunities/SingleOpportunityView/ViewOppHeader";
import ViewOppWhoWeAre from "@/components/Opportunities/SingleOpportunityView/ViewOppWhoWeAre";
import ViewOppLocationWage from "@/components/Opportunities/SingleOpportunityView/ViewOppLocationWage";
import ViewOppTalentDetails from "@/components/Opportunities/SingleOpportunityView/ViewOppTalentDetails";
import ViewOppDescription from "@/components/Opportunities/SingleOpportunityView/ViewOppDescription";
import ViewOppWhatToDo from "@/components/Opportunities/SingleOpportunityView/ViewOppWhatToDo";
import ViewOppRequiredSkills from "@/components/Opportunities/SingleOpportunityView/ViewOppRequiredSkills";
import ViewOppBonusSkills from "@/components/Opportunities/SingleOpportunityView/ViewOppBonusSkills";
import ViewOppFooter from "@/components/Opportunities/SingleOpportunityView/ViewOppFooter";
import { connect } from "react-redux";

interface ViewOppHeaderInterface {
  companyImgUrl: string;
  oppTitle: string;
  companyName: string;
  oppRemainingTime: string;
  fieldOfOccupation: string;
}

interface ViewOppLocationWageInterface {
  location: string;
  salary: string;
}

interface ViewOppTalentDetailsInterface {
  talentLocation: string[];
  talentWorkTimeFrom: string;
  talentWorkTimeTo: string;
}

interface ViewOppRequiredSkillsInterface {
  id: string | number;
  skill: string;
  skillBg: string;
}

interface ViewOppBonusSkillsInterface {
  id: string | number;
  skill: string;
  skillBg: string;
}

interface CPFromRedux {
  store: {
    singleOppView: {
      oppViewHeader: ViewOppHeaderInterface;
      oppViewWhoWeAre: string[];
      oppViewLocationWage: ViewOppLocationWageInterface;
      oppViewTalentDetails: ViewOppTalentDetailsInterface;
      oppViewDesc: string[];
      oppViewWhatToDo: string[];
      oppRequiredSkills: ViewOppRequiredSkillsInterface[];
      oppBonusSkills: ViewOppBonusSkillsInterface[];
    };
  };
}

type Props = {
  oppViewHeader: ViewOppHeaderInterface;
  oppViewWhoWeAre: string[];
  oppViewLocationWage: ViewOppLocationWageInterface;
  oppViewTalentDetails: ViewOppTalentDetailsInterface;
  oppViewDesc: string[];
  oppViewWhatToDo: string[];
  oppRequiredSkills: ViewOppRequiredSkillsInterface[];
  oppBonusSkills: ViewOppBonusSkillsInterface[];
};

const ViewOpportunityBoard: React.FC<Props> = ({
  oppViewHeader,
  oppViewWhoWeAre,
  oppViewLocationWage,
  oppViewTalentDetails,
  oppViewDesc,
  oppViewWhatToDo,
  oppRequiredSkills,
  oppBonusSkills,
}) => {
  return (
    <>
      <ViewOppHeader
        companyImgUrl={oppViewHeader.companyImgUrl}
        companyName={oppViewHeader.companyName}
        oppTitle={oppViewHeader.oppTitle}
        oppRemainingTime={oppViewHeader.oppRemainingTime}
        fieldOfOccupation={oppViewHeader.fieldOfOccupation}
      />
      <ViewOppWhoWeAre whoWeAre={oppViewWhoWeAre} />
      <ViewOppLocationWage
        location={oppViewLocationWage.location}
        salary={oppViewLocationWage.salary}
      />
      <ViewOppTalentDetails
        talentLocation={oppViewTalentDetails.talentLocation}
        talentWorkTimeFrom={oppViewTalentDetails.talentWorkTimeFrom}
        talentWorkTimeTo={oppViewTalentDetails.talentWorkTimeTo}
      />
      <ViewOppDescription oppDescription={oppViewDesc} />
      <ViewOppWhatToDo whatToDoList={oppViewWhatToDo} />
      <ViewOppRequiredSkills requiredSkills={oppRequiredSkills} />
      <ViewOppBonusSkills bonusSkills={oppBonusSkills} />
      <ViewOppFooter />
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  oppViewHeader: state.store.singleOppView.oppViewHeader,
  oppViewWhoWeAre: state.store.singleOppView.oppViewWhoWeAre,
  oppViewLocationWage: state.store.singleOppView.oppViewLocationWage,
  oppViewTalentDetails: state.store.singleOppView.oppViewTalentDetails,
  oppViewDesc: state.store.singleOppView.oppViewDesc,
  oppViewWhatToDo: state.store.singleOppView.oppViewWhatToDo,
  oppRequiredSkills: state.store.singleOppView.oppRequiredSkills,
  oppBonusSkills: state.store.singleOppView.oppBonusSkills,
});

export default connect(mapStateToProps)(ViewOpportunityBoard);
