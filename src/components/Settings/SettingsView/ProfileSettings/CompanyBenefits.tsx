import React, { useState } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import * as actions from "@/redux/actions/profileSettingsAction";
import GethiredTextEditor from "@/components/Global/GetHiredTextEditor";
import Button from "@/components/Global/Button";

interface IBenefitsImages {
  id: string | number;
  img: string;
  hasOverlay?: boolean;
}

interface IBenefitsText {
  __html: string;
}

interface ICPFromRedux {
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
  changeOverlay: (payload: boolean, index: number) => void;
  changeImages: (images: IBenefitsImages[]) => void;
  changeText: (arg: IBenefitsText) => void;
};

const CompanyBenefits: React.FC<Props> = ({
  benefitsImages,
  cultureText,
  changeOverlay,
  changeImages,
  changeText,
}) => {
  let [images, setImages] = useState<IBenefitsImages[]>(benefitsImages);
  let [detailedText, setDetailedText] = useState<IBenefitsText>(cultureText);

  const deleteImg = (arg: number) => {
    let newImages: IBenefitsImages[] = images;
    let deletedImage = newImages.splice(arg, 1);

    setImages(newImages);

    deletedImage.pop();
  };

  const checkEditor = (e: any) => {
    setDetailedText((detailedText = { __html: e.target.innerHTML }));

    console.log(detailedText.__html);
  };

  const saveChanges = () => {
    changeImages(images);
    changeText(detailedText);

    alert("changes saved!");
  };

  const renderBenefitsImages = images.map(
    (img: IBenefitsImages, index: number) => {
      if (index % 2 == 0) {
        return (
          <React.Fragment key={img.id}>
            <div
              className="w-1/2 relative overflow-hidden cursor-pointer mb-6 pr-3"
              onMouseEnter={() => changeOverlay(true, index)}
              onMouseLeave={() => changeOverlay(false, index)}
            >
              <img src={img.img} alt="" className="rounded-xl" />
              <div
                className={cn(
                  "absolute inset-0 bg-black items-center justify-center cool-transition mr-3 rounded-xl lg:flex hidden",
                  {
                    "opacity-80": img.hasOverlay,
                    "opacity-0": !img.hasOverlay,
                  }
                )}
              >
                <button
                  className="outline-none focus:outline-none bg-transparent"
                  onClick={() => deleteImg(index)}
                >
                  <img src="/img/icons/trash-icon.svg" alt="" />
                </button>
              </div>
              <button
                className="bg-primary-red w-9 h-9 rounded-full flex justify-center items-center absolute bottom-2 right-5 lg:hidden outline-none focus:outline-none z-20"
                onClick={() => deleteImg(index)}
              >
                <img src="/img/icons/trash-icon.svg" alt="" />
              </button>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={img.id}>
            <div
              className="w-1/2 relative overflow-hidden cursor-pointer mb-6 pl-3"
              onMouseEnter={() => changeOverlay(true, index)}
              onMouseLeave={() => changeOverlay(false, index)}
            >
              <img src={img.img} alt="" className="rounded-xl" />
              <div
                className={cn(
                  "absolute inset-0 bg-black lg:flex hidden items-center justify-center cool-transition ml-3 rounded-xl",
                  {
                    "opacity-80": img.hasOverlay,
                    "opacity-0": !img.hasOverlay,
                  }
                )}
              >
                <button
                  className="outline-none focus:outline-none bg-transparent"
                  onClick={() => deleteImg(index)}
                >
                  <img src="/img/icons/trash-icon.svg" alt="" />
                </button>
              </div>
              <button
                className="bg-primary-red w-9 h-9 rounded-full flex justify-center items-center absolute bottom-2 right-2 lg:hidden outline-none focus:outline-none z-20"
                onClick={() => deleteImg(index)}
              >
                <img src="/img/icons/trash-icon.svg" alt="" />
              </button>
            </div>
          </React.Fragment>
        );
      }
    }
  );

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="md:text-3xl text-1xl text-titles">Culture & Benefits</h1>
          </div>
          <div>
            <button className="text-primary text-sm outline-none focus:outline-none">
              + Upload new Photo
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap mb-4 mt-8">
          {renderBenefitsImages}
        </div>
        <div className="w-full">
          <GethiredTextEditor
            editorText={cultureText}
            updateEditorValue={checkEditor}
            editorId="benefits-editor"
          />
        </div>
        <div className="w-full">
          <Button text="Save Changes" onClick={saveChanges} />
          <hr className="border-secondary-elements mb-10" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  benefitsImages: state.store.companyBenefits.benefitsImages,
  cultureText: state.store.companyBenefits.cultureText,
});

const mapDispatchToProps = {
  changeOverlay: actions.changeBenefitsImgOverlay,
  changeImages: actions.changeBenefitsImages,
  changeText: actions.changeBenefitsText,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyBenefits);
