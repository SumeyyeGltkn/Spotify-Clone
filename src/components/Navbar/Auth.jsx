import { Menu } from "@headlessui/react";
import Icon from "Icons";

export default function Auth() {
  const user = {
    name: "Sümeyye Gültekin",
    avatar: "https://i.scdn.co/image/ab6775700000ee85c1787794de5c96cffc7d6516",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl  pr-3 ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              alt=""
              className={"w-8 h-8 rounded-full p-px  mr-2"}
            />
            <span className="text-sm font-semibold pr-2 ">{user.name}</span>
            <span className={open && "rotete-180"}>
              <Icon size={16} name="downDir" />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              " mt-1 absolute p-1 top-full right-0 w-48 bg-active rounded traslate-y-2 "
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex justify-between items-center px-2 text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#."
                >
                  Account settings
                  <Icon size={16} name="external" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#."
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded  ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#."
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
