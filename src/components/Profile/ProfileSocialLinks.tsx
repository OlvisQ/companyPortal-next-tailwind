import React from "react";
import { connect } from "react-redux";

interface SocialLinksInterface {
  id: string | number;
  icon: string;
  link: string;
}

interface CPFromRedux {
  store: {
    companySocialMedia: SocialLinksInterface[];
  };
}

type Props = {
  companySocialMedia: SocialLinksInterface[];
};

const ProfileSocialLinks: React.FC<Props> = ({ companySocialMedia }) => {
  const renderSocialLinks = companySocialMedia.map(
    (media: SocialLinksInterface) => {
      return (
        <React.Fragment key={media.id}>
          <div className="w-full flex items-center mb-5">
            <div className="mr-5">
              <img src={media.icon} alt="" />
            </div>
            <div>
              <h1 className="md:text-1xl text-titles">{media.link}</h1>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 w-full mx-auto flex flex-wrap py-8">
          <div className="w-full mb-4">
            <h1 className="text-secondary uppercase text-xss">social media</h1>
          </div>
          {renderSocialLinks}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  companySocialMedia: state.store.companySocialMedia,
});

export default connect(mapStateToProps)(ProfileSocialLinks);
