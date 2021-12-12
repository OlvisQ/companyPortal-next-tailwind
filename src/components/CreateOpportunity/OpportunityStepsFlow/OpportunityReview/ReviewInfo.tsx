import React from "react";

const ReviewInfo: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="text-titles text-1xl">Who We Are</h1>
          <p className="text-secondary font-sans my-6">
            One of our company goals has always been to create a workplace where
            developers can quickly grow their professional careers and use all
            of their skills to create innovative products, software, apps and
            websites. We've come really close because we aren't growing the team
            with 'lone wolves', but developers who want to learm something new,
            who want to share that knowledge with others and who are ready to
            jump into that problem-solving mode whenever they encounter any kind
            of challenge. And, of course, have fun while they're doing it!
          </p>
          <p className="text-secondary font-sans">
            Right now, we have 31 members in our Development department. That's
            31 amazing minds who can look at a project from countless sides to
            find the right way to deliver the best result. And if their primary
            stack of PHP, with Symfony, MySQL and JavaScript aren't enough to
            crack the issue, they'll learn a new language & use new tech -
            anything that'll make their job easier and themselves more
            proficient
          </p>
        </div>
        <div className="w-full my-10">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default ReviewInfo;
