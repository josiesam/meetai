import {
  AgentsView,
  AgentViewError,
  AgentViewLoading,
} from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import ErrorBoundary from "next/dist/client/components/error-boundary";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentViewLoading />}>
        <ErrorBoundary fallback={<AgentViewError />}>
          <AgentsView />;
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
