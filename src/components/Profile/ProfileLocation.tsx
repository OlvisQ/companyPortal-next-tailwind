import React from "react";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    companyLocation: string;
    companyWorkHoursFrom: string;
    companyWorkHoursTo: string;
  };
}

type Props = {
  companyLocation: string;
  companyWorkHoursFrom: string;
  companyWorkHoursTo: string;
};

const ProfileLocation: React.FC<Props> = ({
  companyLocation,
  companyWorkHoursFrom,
  companyWorkHoursTo,
}) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap items-center border-b border-secondary-elements py-8">
          <div className="md:w-1/2 w-full md:mb-0 mb-3">
            <h1 className="text-secondary text-xss uppercase">location</h1>
            <p className="text-titles text-1xl my-5">{companyLocation}</p>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-secondary text-xss uppercase">
              work hour timezone
            </h1>
            <p className="text-titles text-1xl my-5">
              <span className="font-sans">From</span> {companyWorkHoursFrom}{" "}
              <span className="font-sans">to</span> {companyWorkHoursTo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  companyLocation: state.store.companyLocation,
  companyWorkHoursFrom: state.store.companyWorkHoursFrom,
  companyWorkHoursTo: state.store.companyWorkHoursTo,
});

export default connect(mapStateToProps)(ProfileLocation);
