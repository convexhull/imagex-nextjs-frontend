import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h2>{session && "Logged in!"}</h2>
      <h1>Home</h1>
    </div>
  );
}
