import { FileExplorer } from "@/components/FileExplorer/FileExplorer";
import { Pagination } from "@/components/Pagination/Pagination";
import { Timer } from "@/components/Timer";
import { Session } from "inspector/promises";
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Auth />
    </div>
  );
}

async function Auth() {
  const session = await getServerSession();
  return <div>{JSON.stringify(session)}</div>;
}
