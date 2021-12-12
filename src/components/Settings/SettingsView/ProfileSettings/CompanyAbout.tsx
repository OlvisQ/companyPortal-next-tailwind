import React, { useState } from "react";
import cn from "classnames";
import GetHiredTextEditor from "@/components/Global/GetHiredTextEditor";
import { connect } from "react-redux";
import * as profileActions from "@/redux/actions/profileSettingsAction";
import Button from "@/components/Global/Button";

interface IAboutImages {
  id: string | number;
  img: string;
  hasOverlay?: boolean;
}

interface IAboutText {
  __html: string;
}

interface ICPFromRedux {
  store: {
    companyAbout: {
      aboutImages: IAboutImages[];
      aboutText: IAboutText;
    };
  };
}

type Props = {
  aboutImages: IAboutImages[];
  aboutText: IAboutText;
  changeImgOverlay: (payload: boolean, index: number) => void;
  changeImages: (images: IAboutImages[]) => void;
  changeText: (arg: IAboutText) => void;
};

const CompanyAbout: React.FC<Props> = ({
  aboutImages,
  aboutText,
  changeImgOverlay,
  changeImages,
  changeText,
}) => {
  let [images, setImages] = useState<IAboutImages[]>(aboutImages);
  let [detailedText, setText] = useState<IAboutText>(aboutText);

  const deleteImg = (arg: number) => {
    let newImages: IAboutImages[] = images;
    let deletedImage = newImages.splice(arg, 1);

    setImages(newImages);

    deletedImage.pop();
  };

  const checkEditor = (e: any) => {
    setText(
      (detailedText = {
        __html: e.target.innerHTML,
      })
    );
  };

  const saveChanges = () => {
    changeImages(images);
    changeText(detailedText);

    alert("changes saved!");
  };

  const renderAboutImages = images.map((img: IAboutImages, index: number) => {
    if (index % 2 == 0) {
      return (
        <React.Fragment key={img.id}>
          <div
            className="w-1/2 relative overflow-hidden cursor-pointer mb-6 pr-3"
            onMouseEnter={() => changeImgOverlay(true, index)}
            onMouseLeave={() => changeImgOverlay(false, index)}
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
            onMouseEnter={() => changeImgOverlay(true, index)}
            onMouseLeave={() => changeImgOverlay(false, index)}
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
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex justify-between mb-8">
          <h1 className="md:text-3xl text-1xl text-titles">About</h1>
          <button className="text-primary text-sm outline-none focus:outline-none">
            + Upload new Photo
          </button>
        </div>
        <div className="w-full flex flex-wrap mb-4">{renderAboutImages}</div>
        <div className="w-full">
          <GetHiredTextEditor
            editorText={aboutText}
            updateEditorValue={checkEditor}
            editorId="about-editor"
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
  aboutImages: state.store.companyAbout.aboutImages,
  aboutText: state.store.companyAbout.aboutText,
});

const mapDispatchToProps = {
  changeImgOverlay: profileActions.changeAboutImgOverlay,
  changeImages: profileActions.changeAboutImages,
  changeText: profileActions.changeAboutText,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAbout);
