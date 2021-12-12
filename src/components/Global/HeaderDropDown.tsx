import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { connect } from "react-redux";
import { useRouter } from "next/router";

interface CPFromRedux {
  store: {
    userProfilePic: string;
  };
}

type Props = {
  profilePic: string;
};

const HeaderDropdown: React.FC<Props> = ({ profilePic }) => {
  let [dropdownPopoverShow, setDropdownPopoverShow] = useState<boolean>(false);
  const node = useRef<any>(null);
  const router = useRouter();

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const showHideDropDown = () => {
    setDropdownPopoverShow((dropdownPopoverShow = !dropdownPopoverShow));
  };

  const showOverlay = () => {
    if (dropdownPopoverShow) {
      return (
        <div
          className="fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20"
          style={{ marginTop: "73px", zIndex: 999999999999999 }}
          onClick={() => setDropdownPopoverShow(false)}
        ></div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      <div className="flex flex-wrap" ref={node}>
        {showOverlay()}
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={cn(
                "outline-none focus:outline-none cool-transition flex items-center w-10 h-10 cursor-pointer lg:mr-0 mr-10",
                {
                  "active-avatar":
                    dropdownPopoverShow === true ||
                    router.pathname === "/settings",
                }
              )}
              type="button"
              onClick={showHideDropDown}
            >
              <img src={profilePic} alt="" className="rounded-full" />
              <i className="fas fa-chevron-down ml-4 text-secondary"></i>
            </button>
            <div
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base py-2 list-none text-left rounded-b-xl mt-2 -ml-14 bg-white absolute -left-10 top-12 w-40 border border-secondary-elements"
              }
              style={{ zIndex: 999999999999999 }}
            >
              <Link href="/settings">
                <a className="text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles">
                  Account
                </a>
              </Link>

              <Link href="/">
                <a className="text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles">
                  + Invite a Member
                </a>
              </Link>

              <Link href="/">
                <a className="text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles">
                  Contact Support
                </a>
              </Link>

              <Link href="/">
                <a className="text-sm pt-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles">
                  Help
                </a>
              </Link>

              <div className="h-0 mt-4 mb-2 border border-solid border-t-0 border-gray-300 opacity-25 w-10/12 mx-auto" />

              <Link href="/login">
                <a className="text-sm py-2 px-4 flex items-center w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles">
                  <i className="fas fa-sign-out-alt text-secondary mx-3 text-lg"></i>
                  Log out
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  profilePic: state.store.userProfilePic,
});

export default connect(mapStateToProps)(HeaderDropdown);
