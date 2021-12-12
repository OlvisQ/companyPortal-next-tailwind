import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

interface IBenefitsText {
  __html: string;
}

interface IBenefitsImages {
  id: string | number;
  img: string;
}

interface CPFromRedux {
  store: {
    companyBenefits: {
      benefitsImages: IBenefitsImages[];
      cultureText: IBenefitsText;
    };
  };
}

type Props = {
  benefitsImages: IBenefitsImages[];
  cultureText: IBenefitsText;
};

type LeftRightArrowProps = {
  onClick?: () => void;
};

const LeftArrow: React.FC<LeftRightArrowProps> = ({ onClick }) => {
  return (
    <button
      className="outline-none focus:outline-none bg-secondary-elements-light w-52-width h-52px rounded-full flex items-center justify-center border border-secondary-elements absolute left-6 text-primary top-1/2 bottom-1/2 transform -translate-y-1/2 z-20"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

const RightArrow: React.FC<LeftRightArrowProps> = ({ onClick }) => {
  return (
    <button
      className="outline-none focus:outline-none bg-secondary-elements-light w-52-width h-52px rounded-full flex items-center justify-center border border-secondary-elements absolute right-6 text-primary top-1/2 bottom-1/2 transform -translate-y-1/2 z-20"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

const ProfileBenefits: React.FC<Props> = ({ benefitsImages, cultureText }) => {
  const settings: object = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  const renderBenefitsImages = benefitsImages.map((img: IBenefitsImages) => {
    return (
      <React.Fragment key={img.id}>
        <img src={img.img} alt="" className="w-full h-full rounded-xl pr-4" />
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="container mx-auto px-4 profile-benefits">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements py-10">
          <div className="w-full mb-4">
            <h1 className="text-1xl text-titles">Culture & Benefits</h1>
          </div>
          <div className="w-full mb-4">
            <div className="h-full rounded-xl relative">
              <Slider {...settings}>{renderBenefitsImages}</Slider>
            </div>
          </div>
          <div
            className="w-full mb-10 text-secondary font-sans"
            dangerouslySetInnerHTML={cultureText}
          ></div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  benefitsImages: state.store.companyBenefits.benefitsImages,
  cultureText: state.store.companyBenefits.cultureText,
});

export default connect(mapStateToProps)(ProfileBenefits);
