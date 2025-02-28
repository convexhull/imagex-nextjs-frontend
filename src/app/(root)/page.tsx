import ImageScrollLoader from "@/components/ImageScrollLoader/ImageScrollLoader";
export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ImageScrollLoader keyword="cat" />
    </div>
  );
}
