import { ProfileCard } from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello, World !
      </h1>

      <div className="flex flex-wrap justify-center">
        <ProfileCard
          name="Quy"
          title="Hello"
          likes={0}
        />
        <ProfileCard
          name="Zeq"
          title="Hi"
          likes={0}
        />
      </div>
    </main>
  );
}