import React from "react";

const TalentAchievments: React.FC = () => {
  const achievements: string[] = [
    "At least 15 years of work experience in the field of web development",
    "Won Developer award from UK in 2019",
    "Startup reached as nr. #1 startup in UK 2019",
  ];

  const renderAchievements = achievements.map(
    (achievement: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <li className="font-sans text-secondary">{achievement}</li>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full -mb-2">
          <p className="text-secondary text-xss uppercase">
            notable achievements
          </p>
        </div>
        <div className="w-full mb-10">
          <ul className="primary-bullet-list">{renderAchievements}</ul>
        </div>
      </div>
    </>
  );
};

export default TalentAchievments;
