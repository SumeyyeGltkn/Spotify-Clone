import categories from "data/categories";
import Title from "components/Title";
import favorite from "data/favorite";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useRef, useState } from "react";
import Icon from "Icons";
import Category from "components/CategoryItem";
import WideCategory from "components/WideCategoryItem";

export default function Search() {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();
      favoritesRef.current.addEventListener("scroll", scrollHandle);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);
  const slideNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };

  const slidePrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };

  return (
    <>
      <section className="mb-8">
        <Title title="En çok dinlediğin türler" />

        <div className="relative ">
          {prev && (
            <button
              className="w-12 h-12  -left-6 absolute hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 rounded-full bg-white text-black flex items-center justify-center"
              onClick={slidePrev}
            >
              <Icon size={24} name="prev" />
            </button>
          )}
          {next && (
            <button
              className="w-12 h-12 -right-6 hover:scale-[1.06] absolute  z-10 top-1/2 -translate-y-1/2 rounded-full bg-white text-black flex items-center justify-center"
              onClick={slideNext}
            >
              <Icon size={24} name="next" />
            </button>
          )}
          <ScrollContainer
            innerRef={favoritesRef}
            className="flex scrollable overflow-x gap-x-6"
          >
            {favorite.map((category, index) => (
              <WideCategory key={index} category={category} />
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title="Hepsine göz at" />

        <div className="grid grid-cols-5 gap-6 ">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
