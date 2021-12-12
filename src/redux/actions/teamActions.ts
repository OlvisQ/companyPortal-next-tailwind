import * as t from "@/redux/types";

interface TeamMemberInterface {
  teamMemberImg: string;
  teamMemberName: string;
  teamMemberRole: string;
  teamMemberDateJoined: string;
  teamMemberEmail: string;
}

export const addNewTeamMember = (member: TeamMemberInterface) => ({
  type: t.ADD_NEW_TEAM_MEMBER,
  payload: member,
});
