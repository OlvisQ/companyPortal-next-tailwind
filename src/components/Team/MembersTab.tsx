import React from "react";
import TeamHeadingRow from "@/components/Team/TeamHeadingRow";
import TeamRow from "@/components/Team/TeamRow";
import { connect } from "react-redux";

interface TeamMembersInterface {
  teamMemberImg: string;
  teamMemberName: string;
  teamMemberRole: string;
  teamMemberDateJoined: string;
  teamMemberEmail: string;
}

interface CPFromRedux {
  store: {
    teamMembers: TeamMembersInterface[];
  };
}

type Props = {
  teamMembers: TeamMembersInterface[];
};

const MembersTab: React.FC<Props> = ({ teamMembers }) => {
  const renderTeamMembers = teamMembers.map(
    (member: TeamMembersInterface, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="mb-2">
            <TeamRow
              teamMemberImg={member.teamMemberImg}
              teamMemberName={member.teamMemberName}
              teamMemberRole={member.teamMemberRole}
              teamMemberJoinedDate={member.teamMemberDateJoined}
              teamMemberEmail={member.teamMemberEmail}
            />
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="lg:block hidden mb-6">
        <TeamHeadingRow />
      </div>
      {renderTeamMembers}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  teamMembers: state.store.teamMembers,
});

export default connect(mapStateToProps)(MembersTab);
