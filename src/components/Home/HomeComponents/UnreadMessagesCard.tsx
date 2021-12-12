import React, { useState, useEffect } from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";
import UnreadMessage from "@/components/Home/HomeComponents/UnreadMessage";
import Button from "@/components/Global/Button";
import { connect } from "react-redux";
import Slider from "react-slick";

interface UnreadMessageInterface {
  id?: number | string;
  profile_img?: string;
  username?: string;
  deliveredTime?: string;
  unreadMsg?: string;
}

interface CPFromRedux {
  store: {
    unreadMessages: UnreadMessageInterface[];
  };
}

type Props = {
  unreadMessages: UnreadMessageInterface[];
};

const UnreadMessagesCard: React.FC<Props> = ({ unreadMessages }) => {
  const [sliderSettings, setSliderSettings] = useState<object>({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "latest-opts-dots",
    adaptiveHeight: true,
  });

  useEffect(() => {
    setSliderSettings(sliderSettings);
  }, []);

  const renderUnreadMessages = unreadMessages.map(
    (msg: UnreadMessageInterface) => {
      return (
        <React.Fragment key={msg.id}>
          <UnreadMessage
            profile_img={msg.profile_img}
            username={msg.username}
            deliveredTime={msg.deliveredTime}
            unreadMsg={msg.unreadMsg}
          />
        </React.Fragment>
      );
    }
  );

  const unreadMessagesMob = unreadMessages.map(
    (msg: UnreadMessageInterface) => {
      return (
        <div key={msg.id} className="px-2 mb-2">
          <div className="flex flex-wrap bg-white py-3 px-5 shadow-xl rounded-xl">
            <div className="w-full flex items-center my-3">
              <div className="w-7 h-7 rounded-full">
                <img
                  src={msg.profile_img}
                  alt=""
                  className="w-7 h-7 rounded-full"
                />
              </div>
              <h1 className="text-titles ml-2">{msg.username}</h1>
              <p className="text-secondary text-xss ml-auto">
                {msg.deliveredTime}
              </p>
            </div>
            <div className="w-full flex items-center my-3">
              <div className="w-1/5">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <p className="text-titles text-sm">{msg.unreadMsg}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <GetHiredCard
        cardTitle="Unread Messages"
        classNames="mb-6 lg:block hidden"
      >
        <div className="w-full flex my-4">
          <div className="w-4/5 flex items-end">
            <h1 className="text-3xl text-primary -mb-1 mr-3">6</h1>
            <div className="flex items-center ml-3">
              <span className="text-xs text-secondary">
                It takes 2-3 hours on average from Candidate to asnwer since
                Accept.
              </span>
            </div>
          </div>
          <div className="w-1/5 flex justify-end">
            <img src="/img/icons/message-icon.svg" alt="" />
          </div>
        </div>
        <div className="w-full">{renderUnreadMessages}</div>
        <div className="w-full -mb-1">
          <Button
            text="Show All Messages"
            isTransparent
            classNames="text-primary h-0 mt-3 -mb-6 p-0"
          />
        </div>
      </GetHiredCard>
      <div className="lg:hidden flex flex-wrap mt-5 mb-8">
        <div className="w-full">
          <h1 className="text-titles text-1xl">Unread Messages</h1>
        </div>
        <div className="w-full flex my-5">
          <div className="w-4/5 flex items-end">
            <h1 className="text-3xl text-primary -mb-1 mr-3">6</h1>
            <div className="flex items-center">
              <span className="text-xs text-secondary">
                It takes 2-3 hours on average from Candidate to asnwer since
                Accept.
              </span>
            </div>
          </div>
          <div className="w-1/5 flex justify-end">
            <img src="/img/icons/message-icon.svg" alt="" />
          </div>
        </div>
        <div className="w-full mt-2 relative">
          <Slider {...sliderSettings}>{unreadMessagesMob}</Slider>
          <button className="bg-transparent outline-none focus:outline-none text-primary text-xs absolute right-4 mt-4">
            Show All Messages
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  unreadMessages: state.store.unreadMessages,
});

export default connect(mapStateToProps)(UnreadMessagesCard);
