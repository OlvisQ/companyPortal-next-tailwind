import React, { useState } from "react";
import InputField from "@/components/Global/InputField";
import { connect } from "react-redux";
import Button from "@/components/Global/Button";
import * as actions from "@/redux/actions/profileSettingsAction";

interface ISocialMedia {
  id: string | number;
  icon: string;
  link: string;
  label?: string;
}

interface ICPFromRedux {
  store: {
    companySocialMedia: ISocialMedia[];
  };
}

type Props = {
  companySocialMedia: ISocialMedia[];
  changeLinks: (links: ISocialMedia[]) => void;
};

const CompanyLinks: React.FC<Props> = ({ companySocialMedia, changeLinks }) => {
  let [links, setLinks] = useState<ISocialMedia[]>(companySocialMedia);

  const changeLink = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    let newLinks: ISocialMedia[] = [...links];
    newLinks[index].link = e.target.value;

    setLinks(newLinks);
  };

  const saveChanges = () => {
    changeLinks(links);
    alert("Changes Saved");
  };

  const renderLinkFields = links.map((link: ISocialMedia, index: number) => {
    return (
      <React.Fragment key={link.id}>
        <div className="w-full mb-8">
          <InputField
            label={link.label}
            value={link.link}
            onInputChange={(e) => changeLink(e, index)}
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="text-titles md:text-3xl text-1xl mb-10">Social Media</h1>
        </div>
        <div className="w-full flex flex-wrap">{renderLinkFields}</div>
        <div className="w-full -mt-8">
          <Button text="Save Changes" onClick={() => saveChanges()} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  companySocialMedia: state.store.companySocialMedia,
});

const mapDispatchToProps = {
  changeLinks: actions.changeCompanyLinks,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLinks);
