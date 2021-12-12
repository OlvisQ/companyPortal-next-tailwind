import React, { useEffect, useState } from "react";
import cn from "classnames";
import AppliedApplicants from "@/components/Opportunities/SingleOpportunityDetails/AppliedApplicants";
import ShortlistedApplicants from "@/components/Opportunities/SingleOpportunityDetails/ShortlistedApplicants";
import InvitedApplicants from "@/components/Opportunities/SingleOpportunityDetails/InvitedApplicants";
import AcceptedApplicants from "@/components/Opportunities/SingleOpportunityDetails/AcceptedApplicants";
import RejectedApplicants from "@/components/Opportunities/SingleOpportunityDetails/RejectedApplicants";
import { connect } from "react-redux";
import Slider from "react-slick";

interface ApplicantInterface {
  id: string | number;
  fullName: string;
  oppApplyingFor: string;
  match: string;
  dateApplied: string;
  remainingTime: string;
  status: string;
}

interface CPFromRedux {
  store: {
    singleOppDetails: {
      appliedApplicants: ApplicantInterface[];
      shortListedApplicants: ApplicantInterface[];
      invitedApplicants: ApplicantInterface[];
      acceptedApplicants: ApplicantInterface[];
      rejectedApplicants: ApplicantInterface[];
    };
  };
}

type Props = {
  appliedApplicants: ApplicantInterface[];
  appliedRoute?: string;
  shortListedApplicants: ApplicantInterface[];
  shortlistedRoute?: string;
  invitedApplicants: ApplicantInterface[];
  invitedRoute?: string;
  acceptedApplicants: ApplicantInterface[];
  acceptedRoute?: string;
  rejectedApplicants: ApplicantInterface[];
  rejectedRoute?: string;
  tabOne?: string;
  tabTwo?: string;
  tabThree?: string;
  tabFour?: string;
  tabFive?: string;
  hasTotalAmount?: boolean;
};

const SingleOppTabs: React.FC<Props> = ({
  appliedApplicants,
  appliedRoute = "/opportunities/single-opportunity-view",
  shortListedApplicants,
  shortlistedRoute = "/opportunities/single-opportunity-view",
  invitedApplicants,
  invitedRoute = "/opportunities/single-opportunity-view",
  acceptedApplicants,
  acceptedRoute = "/opportunities/single-opportunity-view",
  rejectedApplicants,
  rejectedRoute = "/opportunities/single-opportunity-view",
  tabOne = "Applied",
  tabTwo = "Shortlisted",
  tabThree = "Invited",
  tabFour = "Accepted",
  tabFive = "Rejected",
  hasTotalAmount = true,
}) => {
  let [tabs, setTabs] = useState<number>(1);
  let [sliderSetting, setSliderSettings] = useState<object>({
    dots: false,
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
  });

  useEffect(() => {
    setSliderSettings(sliderSetting);
  }, []);

  const renderTabDetails = () => {
    switch (tabs) {
      case 1:
        return (
          <>
            <AppliedApplicants appliedRoute={appliedRoute} />
          </>
        );

      case 2:
        return (
          <>
            <ShortlistedApplicants shortlistedRoute={shortlistedRoute} />
          </>
        );

      case 3:
        return (
          <>
            <InvitedApplicants invitedRoute={invitedRoute} />
          </>
        );

      case 4:
        return (
          <>
            <AcceptedApplicants acceptedRoute={acceptedRoute} />
          </>
        );

      case 5:
        return (
          <>
            <RejectedApplicants rejectedRoute={rejectedRoute} />
          </>
        );
    }
  };

  return (
    <>
      <div className="md:flex hidden border-b border-secondary-elements">
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none md:mr-10 md:w-auto w-full md:block flex flex-wrap justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 1,
              "text-secondary": tabs > 1,
            }
          )}
          onClick={() => setTabs(1)}
        >
          <div
            className={cn("text-3xl text-left w-full", {
              "text-primary": tabs === 1,
              "text-titles": tabs > 1,
              hidden: !hasTotalAmount,
            })}
          >
            {appliedApplicants.length}
          </div>
          {tabOne}
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none md:mr-10 md:w-auto w-full md:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 2,
              "text-secondary": tabs > 2 || tabs < 2,
            }
          )}
          onClick={() => setTabs(2)}
        >
          <div
            className={cn("text-3xl text-left w-full", {
              "text-primary": tabs === 2,
              "text-titles": tabs > 2 || tabs < 2,
              hidden: !hasTotalAmount,
            })}
          >
            {shortListedApplicants.length}
          </div>
          {tabTwo}
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none md:mr-10 md:w-auto w-full md:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 3,
              "text-secondary": tabs < 3 || tabs > 3,
            }
          )}
          onClick={() => setTabs(3)}
        >
          <div
            className={cn("text-3xl text-left w-full", {
              "text-primary": tabs === 3,
              "text-titles": tabs < 3 || tabs > 3,
              hidden: !hasTotalAmount,
            })}
          >
            {invitedApplicants.length}
          </div>
          {tabThree}
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none md:mr-10 md:w-auto w-full md:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 4,
              "text-secondary": tabs < 4 || tabs > 4,
              hidden: !hasTotalAmount,
            }
          )}
          onClick={() => setTabs(4)}
        >
          <div
            className={cn("text-3xl text-left w-full", {
              "text-primary": tabs === 4,
              "text-titles": tabs < 4 || tabs > 4,
              hidden: !hasTotalAmount,
            })}
          >
            {acceptedApplicants.length}
          </div>
          {tabFour}
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none md:mr-10 md:w-auto w-full md:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 5,
              "text-secondary": tabs < 5,
            }
          )}
          onClick={() => setTabs(5)}
        >
          <div
            className={cn("text-3xl text-left w-full", {
              "text-primary": tabs === 5,
              "text-titles": tabs < 5,
              hidden: !hasTotalAmount,
            })}
          >
            {rejectedApplicants.length}
          </div>
          {tabFive}
        </button>
      </div>
      <div className="md:hidden block border-b border-secondary-elements">
        <Slider {...sliderSetting}>
          <div className="pr-6 -ml-1">
            <button
              className={cn(
                "text-left bg-transparent outline-none focus:outline-none lg:py-4 py-6",
                {
                  "active-tab text-titles": tabs === 1,
                  "text-secondary": tabs > 1,
                }
              )}
              onClick={() => setTabs(1)}
            >
              <div
                className={cn("text-3xl text-left w-full", {
                  "text-primary": tabs === 1,
                  "text-titles": tabs > 1,
                })}
              >
                {appliedApplicants.length}
              </div>
              Applied
            </button>
          </div>
          <div className="pr-4">
            <button
              className={cn(
                "text-left bg-transparent outline-none focus:outline-none md:mr-10 lg:py-4 py-6",
                {
                  "active-tab text-titles": tabs === 2,
                  "text-secondary": tabs > 2 || tabs < 2,
                }
              )}
              onClick={() => setTabs(2)}
            >
              <div
                className={cn("text-3xl text-left w-full", {
                  "text-primary": tabs === 2,
                  "text-titles": tabs > 2 || tabs < 2,
                })}
              >
                {shortListedApplicants.length}
              </div>
              Shortlisted
            </button>
          </div>
          <div className="pr-4">
            <button
              className={cn(
                "text-left bg-transparent outline-none focus:outline-none md:mr-10 lg:py-4 py-6",
                {
                  "active-tab text-titles": tabs === 3,
                  "text-secondary": tabs < 3 || tabs > 3,
                }
              )}
              onClick={() => setTabs(3)}
            >
              <div
                className={cn("text-3xl text-left w-full", {
                  "text-primary": tabs === 3,
                  "text-titles": tabs < 3 || tabs > 3,
                })}
              >
                {invitedApplicants.length}
              </div>
              Invited
            </button>
          </div>
          <div className="pr-4">
            <button
              className={cn(
                "text-left bg-transparent outline-none focus:outline-none md:mr-10 lg:py-4 py-6",
                {
                  "active-tab text-titles": tabs === 4,
                  "text-secondary": tabs < 4 || tabs > 4,
                }
              )}
              onClick={() => setTabs(4)}
            >
              <div
                className={cn("text-3xl text-left w-full", {
                  "text-primary": tabs === 4,
                  "text-titles": tabs < 4 || tabs > 4,
                })}
              >
                {acceptedApplicants.length}
              </div>
              Accepted
            </button>
          </div>
          <div className="pr-4">
            <button
              className={cn(
                "text-left bg-transparent outline-none focus:outline-none md:mr-10 lg:py-4 py-6",
                {
                  "active-tab text-titles": tabs === 5,
                  "text-secondary": tabs < 5,
                }
              )}
              onClick={() => setTabs(5)}
            >
              <div
                className={cn("text-3xl text-left w-full", {
                  "text-primary": tabs === 5,
                  "text-titles": tabs < 5,
                })}
              >
                {rejectedApplicants.length}
              </div>
              Rejected
            </button>
          </div>
        </Slider>
      </div>
      <div className="w-full mt-8">{renderTabDetails()}</div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  appliedApplicants: state.store.singleOppDetails.appliedApplicants,
  shortListedApplicants: state.store.singleOppDetails.shortListedApplicants,
  invitedApplicants: state.store.singleOppDetails.invitedApplicants,
  acceptedApplicants: state.store.singleOppDetails.acceptedApplicants,
  rejectedApplicants: state.store.singleOppDetails.rejectedApplicants,
});

export default connect(mapStateToProps)(SingleOppTabs);
