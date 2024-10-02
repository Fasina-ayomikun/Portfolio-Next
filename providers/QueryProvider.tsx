"use client";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <section className='background bg-no-repeat bg-center bg-cover h-full min-h-screen md:h-screen  '>
        <Navbar />
        {children}
      </section>
    </QueryClientProvider>
  );
};

export default QueryProvider;
