import Section from "components/Section";
import songs from "data/songs";

export default function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently Played" more="/blabal" items={songs} />
      <Section title="Shows to try" more="/blabal" items={songs} />
      <Section title="Made For Sümeyye Gültekin" more="/blabal" items={songs} />
    </div>
  );
}
