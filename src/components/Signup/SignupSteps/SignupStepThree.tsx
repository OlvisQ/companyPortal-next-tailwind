import React from "react";
import InputField from "@/components/Global/InputField";
import ChatInitiater from "@/components/Global/ChatInitiater";
import * as actions from "@/redux/actions/signupActions";
import { connect } from "react-redux";
import DropdownSelect from "@/components/Global/DropdownSelect";

interface CPFromRedux {
  store: {
    signupStepThree: {
      firstName: string;
      lastName: string;
      companyName: string;
      companySizes: string[];
      companySelectedSize: string;
      companyLocations: string[];
      companySelectedLocation: string;
      postalCode: string;
      address: string;
      socialMedia: {
        website: string;
        linkedIn: string;
        facebook: string;
        instagram: string;
      };
    };
  };
}

type Props = {
  firstName: string;
  lastName: string;
  companyName: string;
  companySizes: string[];
  companySelectedSize: string;
  companyLocations: string[];
  companySelectedLocation: string;
  postalCode: string;
  address: string;
  website: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  changeFirstName?: (arg: string) => void;
  changeLastName?: (arg: string) => void;
  changeCompanyName?: (arg: string) => void;
  changeCompanySize?: (arg: string) => void;
  changeCompanyLocation?: (arg: string) => void;
  changePostalCode?: (arg: string) => void;
  changeAddress?: (arg: string) => void;
  changeWebsiteURL?: (arg: string) => void;
  changeLinkedInURL?: (arg: string) => void;
  changeFacebookURL?: (arg: string) => void;
  changeInstagramURL?: (arg: string) => void;
};

const SignupStepThree: React.FC<Props> = ({
  firstName,
  lastName,
  companyName,
  companySizes,
  companySelectedSize,
  companyLocations,
  companySelectedLocation,
  postalCode,
  address,
  website,
  linkedIn,
  facebook,
  instagram,
  changeFirstName,
  changeLastName,
  changeCompanyName,
  changeCompanySize,
  changeCompanyLocation,
  changePostalCode,
  changeAddress,
  changeWebsiteURL,
  changeLinkedInURL,
  changeFacebookURL,
  changeInstagramURL,
}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap items-start">
          <div className="xl:w-1/3 lg:w-1/2 w-full ml-auto lg:mb-0 mb-8">
            <h1 className="text-titles text-3xl mb-12">
              Yours & Company Information
            </h1>
            <InputField
              type="text"
              label="first name"
              classNames="mb-8"
              value={firstName}
              onInputChange={(e) =>
                changeFirstName !== undefined
                  ? changeFirstName(e.target.value)
                  : null
              }
            />
            <InputField
              type="text"
              label="last name"
              classNames="mb-8"
              value={lastName}
              onInputChange={(e) =>
                changeLastName !== undefined
                  ? changeLastName(e.target.value)
                  : null
              }
            />
            <InputField
              type="text"
              label="company name"
              classNames="mb-8"
              value={companyName}
              onInputChange={(e) =>
                changeCompanyName !== undefined
                  ? changeCompanyName(e.target.value)
                  : null
              }
            />
            <DropdownSelect
              dropDownData={companySizes}
              selectedItem={(value) =>
                changeCompanySize !== undefined
                  ? changeCompanySize(value)
                  : null
              }
              selectedValue={companySelectedSize}
              label="company size"
              classNames="mb-10"
            />
            <DropdownSelect
              dropDownData={companyLocations}
              selectedItem={(value) =>
                changeCompanyLocation !== undefined
                  ? changeCompanyLocation(value)
                  : null
              }
              selectedValue={companySelectedLocation}
              label="company location"
              classNames="mb-8"
            />
            <div className="w-full flex lg:flex-nowrap flex-wrap justify-between">
              <div className="lg:w-115px w-1/3 lg:pr-0">
                <InputField
                  type="text"
                  label="postal code"
                  value={postalCode}
                  onInputChange={(e) =>
                    changePostalCode !== undefined
                      ? changePostalCode(e.target.value)
                      : null
                  }
                />
              </div>
              <div className="lg:w-204px w-2/3 lg:pl-0 pl-4">
                <InputField
                  type="text"
                  label="address"
                  value={address}
                  onInputChange={(e) =>
                    changeAddress !== undefined
                      ? changeAddress(e.target.value)
                      : null
                  }
                />
              </div>
              <div className="lg:w-69px w-full lg:mt-0 mt-4">
                <button className="outline-none focus:outline-none w-full h-52px flex justify-center items-center text-primary rounded-lg text-sm bg-secondary-light2">
                  Search
                </button>
              </div>
            </div>
            <div className="w-full mb-20">
              <button className="w-full text-primary text-sm flex justify-start h-52px items-center">
                + Add another Company Location
              </button>
            </div>

            <div className="w-full flex flex-wrap">
              <div className="w-full mb-8">
                <h1 className="text-titles text-3xl">
                  Social Media (optional)
                </h1>
              </div>
              <InputField
                type="text"
                label="website"
                value={website}
                onInputChange={(e) =>
                  changeWebsiteURL !== undefined
                    ? changeWebsiteURL(e.target.value)
                    : null
                }
                classNames="mb-8"
                placeHolder="https://"
              />
              <InputField
                type="text"
                label="linkedin"
                value={linkedIn}
                onInputChange={(e) =>
                  changeLinkedInURL !== undefined
                    ? changeLinkedInURL(e.target.value)
                    : null
                }
                classNames="mb-8"
                placeHolder="https://"
              />
              <InputField
                type="text"
                label="facebook"
                value={facebook}
                onInputChange={(e) =>
                  changeFacebookURL !== undefined
                    ? changeFacebookURL(e.target.value)
                    : null
                }
                classNames="mb-8"
                placeHolder="https://"
              />
              <InputField
                type="text"
                label="instagram"
                value={instagram}
                onInputChange={(e) =>
                  changeInstagramURL !== undefined
                    ? changeInstagramURL(e.target.value)
                    : null
                }
                classNames="mb-8"
                placeHolder="https://"
              />
            </div>
          </div>
          <div className="xl:w-1/2 w-2/3 lg:flex hidden justify-center">
            <ChatInitiater
              classNames="w-1/2 p-0"
              headerWidth="w-full"
              initiaterInfoWidth="w-1/2 ml-6"
              imgWidth="w-1/3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  firstName: state.store.signupStepThree.firstName,
  lastName: state.store.signupStepThree.lastName,
  companyName: state.store.signupStepThree.companyName,
  companySizes: state.store.signupStepThree.companySizes,
  companySelectedSize: state.store.signupStepThree.companySelectedSize,
  companyLocations: state.store.signupStepThree.companyLocations,
  companySelectedLocation: state.store.signupStepThree.companySelectedLocation,
  postalCode: state.store.signupStepThree.postalCode,
  address: state.store.signupStepThree.address,
  website: state.store.signupStepThree.socialMedia.website,
  linkedIn: state.store.signupStepThree.socialMedia.linkedIn,
  facebook: state.store.signupStepThree.socialMedia.facebook,
  instagram: state.store.signupStepThree.socialMedia.instagram,
});

const mapDispatchToProps = {
  changeFirstName: actions.changeSignupFirstName,
  changeLastName: actions.changeSignupLastname,
  changeCompanyName: actions.changeSignupCompanyName,
  changeCompanySize: actions.changeSignupCompanySize,
  changeCompanyLocation: actions.changeSignupCompanyLocation,
  changePostalCode: actions.changeSignupPostalCode,
  changeAddress: actions.changeSignupAddress,
  changeWebsiteURL: actions.changeSignupWebsite,
  changeLinkedInURL: actions.changeSignupLinkedIn,
  changeFacebookURL: actions.changeSignupFacebook,
  changeInstagramURL: actions.changeSignupInstagram,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupStepThree);
