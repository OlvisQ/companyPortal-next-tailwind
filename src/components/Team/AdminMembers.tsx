import React from "react";
import TeamHeadingRow from "@/components/Team/TeamHeadingRow";
import TeamRow from "@/components/Team/TeamRow";
import { connect } from "react-redux";

interface AdminInterface {
  adminImg: string;
  adminName: string;
  adminRole: string;
  adminDateJoined: string;
  adminEmail: string;
}

interface CPFromRedux {
  store: {
    adminMembers: AdminInterface[];
  };
}

type Props = {
  adminMembers: AdminInterface[];
};

const AdminMembers: React.FC<Props> = ({ adminMembers }) => {
  const renderAdminMembers = adminMembers.map(
    (member: AdminInterface, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="mb-2">
            <TeamRow
              teamMemberImg={member.adminImg}
              teamMemberName={member.adminName}
              teamMemberRole={member.adminRole}
              teamMemberJoinedDate={member.adminDateJoined}
              teamMemberEmail={member.adminEmail}
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
      {renderAdminMembers}
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  adminMembers: state.store.adminMembers,
});

export default connect(mapStateToProps)(AdminMembers);
