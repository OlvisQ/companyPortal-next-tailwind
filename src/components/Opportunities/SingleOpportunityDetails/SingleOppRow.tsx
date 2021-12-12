import React from "react";
import Checkbox from "@/components/Global/Checkbox";

type Props = {
  isChecked: boolean;
  applicantImg: string;
  fullName: string;
  oppApplyingFor: string;
  match: string;
  dateApplied: string;
  remainingTime: string;
  status: string;
  onCheck?: () => void;
  onClick?: () => void;
};

const SingleOppRow: React.FC<Props> = ({
  isChecked,
  applicantImg,
  fullName,
  oppApplyingFor,
  match,
  dateApplied,
  remainingTime,
  status,
  onCheck,
  onClick
}) => {
  return (
    <>
      <div onClick={onClick} className="lg:h-20 bg-white shadow-main px-6 lg:py-0 py-6 flex lg:items-center rounded-xl items-start">
        <div className="w-full flex lg:flex-nowrap flex-wrap lg:items-center">
          <div className="flex lg:items-center lg:ml-12 xl:w-72 lg:w-56 w-3/4 items-start">
            <Checkbox
              borderColor="border-secondary-elements"
              classNames="-ml-12 lg:block hidden"
              isChecked={isChecked}
              onCheck={onCheck}
            />
            <div className="h-52px w-52-width rounded-full border border-secondary-elements flex items-center justify-center lg:mr-5 mr-3">
              <img src={applicantImg} alt="" />
            </div>
            <div>
              <p className="text-titles truncate">{fullName}</p>
              <p className="text-titles lg:text-1xl lg:hidden block">{match}</p>
            </div>
          </div>
          <div className="lg:hidden flex justify-end w-1/4">
            <button className="bg-transparent outline-none focus:outline-none">
              <img src="/img/icons/note-icon.svg" alt="" />
            </button>
          </div>
          <div className="xl:w-64 lg:w-52 w-full my-6">
            <p className="text-primary lg:text-base text-1xl">
              {oppApplyingFor}
            </p>
          </div>
          <div className="xl:w-36 lg:w-20 lg:block hidden">
            <p className="text-titles text-1xl">{match}</p>
          </div>
          <div className="xl:w-36 lg:w-28 w-1/2">
            <p className="text-secondary font-sans text-sm lg:block hidden">
              {dateApplied}
            </p>
            <p className="text-secondary text-sm lg:hidden block">
              {remainingTime}
            </p>
          </div>
          <div className="xl:w-32 lg:w-14 lg:block hidden">
            <button className="bg-transparent outline-none focus:outline-none">
              <img src="/img/icons/note-icon.svg" alt="" />
            </button>
          </div>
          <div className="xl:w-48 lg:w-28 w-1/2 lg:text-left text-right">
            <p className="text-secondary text-sm lg:block hidden">
              {remainingTime}
            </p>
            <p className="text-secondary font-sans text-sm lg:hidden block">
              {dateApplied}
            </p>
          </div>
          <div className="lg:w-auto w-full lg:border-t-0 border-t border-secondary-elements lg:py-0 py-4 lg:block flex justify-center lg:mt-0 mt-4 lg:mb-0 -mb-5">
            <button className="bg-transparent outline-none focus:outline-none text-primary text-sm">
              {status}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOppRow;
