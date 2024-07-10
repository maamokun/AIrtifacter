"use client";
import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import { useSession, signIn, signOut } from "next-auth/react";
import Loading from "./components/ui/loader-mask";

export default function Home() {
    const { data: session, status, update } = useSession();

    if (status === "loading") {
        return (
            <div>
                <Loading size="lg" />
            </div>
        );
    }

    return session ? (
        <main className="h-full w-full flex justify-center items-center background-gradient">
            <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem]">
                <Header />
                <div className="h-[65vh] flex">
                    <ChatSection />
                </div>
            </div>
        </main>
    ) : (
        <main className="h-full w-full flex justify-center items-center background-gradient">
            <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem]">
                <Header />
                <div className="h-[65vh] flex">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-primary font-bold text-3xl">
                            Please Login. (click the thing on the bottom right)
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    );
}
