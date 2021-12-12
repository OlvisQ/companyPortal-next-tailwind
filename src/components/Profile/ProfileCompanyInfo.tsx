import React from "react";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    companyName: string;
    companyEmployeeSize: string;
  };
}

type Props = {
  companyName: string;
  companyEmployeeSize: string;
};

const ProfileCompanyInfo: React.FC<Props> = ({
  companyName,
  companyEmployeeSize,
}) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap items-center border-b border-secondary-elements py-4">
          <div className="md:w-1/2 w-full md:mb-0 mb-3">
            <h1 className="text-secondary text-xss uppercase">company name</h1>
            <p className="text-titles text-1xl my-5">{companyName}</p>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-secondary text-xss uppercase">size</h1>
            <p className="text-titles text-1xl my-5">{companyEmployeeSize}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  companyName: state.store.companyName,
  companyEmployeeSize: state.store.companyEmployeeSize,
});

export default connect(mapStateToProps)(ProfileCompanyInfo);
