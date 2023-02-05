import logo from "images/logo.svg";
import Menu from "./Sidebar/Menu";
import PlayList from "./Sidebar/PlayList";
import DownloadApp from "./Sidebar/DownloadApp";
import Icon from "Icons";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

export default function Sidebar() {
  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="s" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="d"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="s"
              className="py-2 px-6 flex items-center text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-500 text-white to-blue-300  rounded-sm group-hover:opacity-100">
                <Icon name="heartFilled" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <PlayList />
      <DownloadApp />
      {sidebar && <SidebarCover />}
    </aside>
  );
}
