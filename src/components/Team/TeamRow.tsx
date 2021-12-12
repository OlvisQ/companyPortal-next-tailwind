import React from "react";
import TeamEditIcon from "@/components/Team/TeamEditIcon";
import cn from "classnames";

type Props = {
  teamMemberImg: string;
  teamMemberName: string;
  teamMemberRole: string;
  teamMemberJoinedDate?: string;
  teamMemberEmail?: string;
  hasDescription?: boolean;
  description?: string;
  hasTextInOptions?: boolean;
  hasEmail?: boolean;
};

const TeamRow: React.FC<Props> = ({
  teamMemberImg,
  teamMemberName,
  teamMemberRole,
  teamMemberJoinedDate,
  teamMemberEmail,
  hasDescription,
  description,
  hasTextInOptions,
  hasEmail = true,
}) => {
  return (
    <>
      <div className="bg-white shadow-main rounded-xl lg:px-6 lg:py-4 p-6 relative">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/5 w-full flex items-center lg:mb-0 mb-5">
            <div className="h-52px w-52-width rounded-full">
              <img
                src={teamMemberImg}
                alt=""
                className="h-52px w-52-width rounded-full"
              />
            </div>
            <div className="ml-3 mt-1">
              <p className="text-titles">{teamMemberName}</p>
              <p className="text-titles text-sm lg:hidden block font-sans">
                {teamMemberRole}
              </p>
            </div>
          </div>
          <div className="lg:w-1/5 w-full lg:block hidden">
            <p className="text-titles font-sans">{teamMemberRole}</p>
          </div>
          <div
            className={cn("w-full lg:mb-0 mb-5", {
              "lg:w-1/5": hasEmail,
              "lg:w-1/3": !hasEmail,
            })}
          >
            <p className="text-secondary font-sans text-sm lg:block hidden">
              {hasDescription ? description : teamMemberJoinedDate}
            </p>
            <p
              className={cn("text-sm lg:hidden block", {
                "text-primary": !hasDescription,
                "text-titles font-sans": hasDescription,
              })}
            >
              {hasDescription ? description : teamMemberEmail}
            </p>
          </div>
          {hasEmail ? (
            <div className="lg:w-1/5 w-full">
              <p className="text-primary text-sm lg:block hidden">
                {teamMemberEmail}
              </p>
              <p className="text-secondary font-sans lg:hidden block text-sm">
                {teamMemberJoinedDate}{" "}
                <span className="font-gilroy text-xss ml-2 uppercase">
                  date joined
                </span>
              </p>
            </div>
          ) : null}
          <div
            className={cn(
              "text-titles flex lg:justify-center", 
              {
                "lg:ml-auto": !hasEmail,
                "lg:w-1/5 lg:static absolute top-4 right-4": !hasTextInOptions,
                "lg:w-1/5 w-full": hasTextInOptions
              }
            )}
          >
            {hasTextInOptions ? (
              <button className="text-sm text-primary bg-transparent outline-none focus:outline-none lg:w-auto w-full flex justify-center lg:border-0 border-t border-secondary-elements lg:pt-0 pt-6 lg:pb-0 pb-1">
                + Schedule a Meeting
              </button>
            ) : (
              <TeamEditIcon />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamRow;
