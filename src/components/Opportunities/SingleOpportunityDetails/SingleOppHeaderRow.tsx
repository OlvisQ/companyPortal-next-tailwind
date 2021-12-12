import React from "react";
import Checkbox from "@/components/Global/Checkbox";

const SingleOppHeaderRow: React.FC = () => {
  return (
    <>
      <div className="h-20 px-6 flex items-center rounded-xl -mt-6">
        <div className="w-full flex items-center">
          <div className="flex items-center w-72 ml-12">
            <Checkbox
              borderColor="border-secondary-elements"
              classNames="-ml-12"
            />
            <p className="text-secondary text-xss uppercase">full name</p>
          </div>
          <div className="w-64">
            <p className="text-secondary text-xss uppercase">
              opportunity applying for{" "}
            </p>
          </div>
          <div className="w-36">
            <p className="text-secondary text-xss uppercase">match %</p>
          </div>
          <div className="w-36">
            <p className="text-secondary text-xss uppercase">date applied</p>
          </div>
          <div className="w-32">
            <p className="text-secondary text-xss uppercase">notes</p>
          </div>
          <div className="w-48">
            <p className="text-secondary text-xss uppercase">remaining time</p>
          </div>
          <div>
            <p className="text-secondary text-xss uppercase">Status</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOppHeaderRow;
