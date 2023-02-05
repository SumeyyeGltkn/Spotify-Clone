export default function PlayList() {
  return (
    <nav className="mx-6 mt-4 py-2 flex-auto border-t border-white border-opacity-10 overflow-auto ">
      <ul>
        {new Array(1).fill(
          <li>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              En İyi 50 - Global
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              Running
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              2022'de En Çok Dinlenenler
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              Podcast
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              WorkOut Music
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              Coding Session
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              Akustik
            </a>
            <a
              href="l"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              Blues
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
