import React from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";

type Props = {
  cardValue: string;
  cardTitle: string;
  cardSubtitle: string;
  cardSubtitleBreak: string;
  classNames?: string;
};

const InfoCard: React.FC<Props> = ({
  cardValue,
  cardTitle,
  cardSubtitle,
  cardSubtitleBreak,
  classNames,
}) => {
  return (
    <>
      <GetHiredCard classNames={classNames}>
        <h1 className="w-full text-3xl text-primary text-center">
          {cardValue}
        </h1>
        <p className="w-full text-xs text-titles text-center my-4">
          {cardTitle}
        </p>
        <p className="w-full text-secondary text-xs text-center">
          {cardSubtitle} <br /> {cardSubtitleBreak}
        </p>
      </GetHiredCard>
    </>
  );
};

export default InfoCard;
