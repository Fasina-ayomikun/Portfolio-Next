"use client";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <section className='background bg-no-repeat bg-center bg-cover h-full min-h-screen md:h-screen  '>
          <Navbar />
          <Sidebar />
          {children}
        </section>
      </Suspense>
    </QueryClientProvider>
  );
};

export default QueryProvider;
