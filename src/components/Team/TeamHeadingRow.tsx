import React from "react";
import cn from "classnames";

type Props = {
  hasDescription?: boolean;
  hasEmail?: boolean;
};

const TeamHeadingRow: React.FC<Props> = ({
  hasDescription,
  hasEmail = true,
}) => {
  return (
    <>
      <div className="px-6">
        <div className="flex justify-between">
          <div className="w-1/5">
            <p className="text-xss text-secondary uppercase">full name</p>
          </div>
          <div className="w-1/5">
            <p className="text-xss text-secondary uppercase">role</p>
          </div>
          <div
            className={cn({
              "w-1/5": hasEmail,
              "w-2/5": !hasEmail,
            })}
          >
            {hasDescription ? (
              <p className="text-xss text-secondary uppercase">description</p>
            ) : (
              <p className="text-xss text-secondary uppercase">date joined</p>
            )}
          </div>
          {hasEmail ? (
            <div className="w-1/5">
              <p className="text-xss text-secondary uppercase">
                e-mail address
              </p>
            </div>
          ) : null}
          <div className="w-1/5 text-center">
            <p className="text-xss text-secondary uppercase">options</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHeadingRow;
