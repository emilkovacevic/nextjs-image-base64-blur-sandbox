"use client";

import Button from "@/components/ui/Button";
import React from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-orange-500 py-10 px-4 bg-white text-center">
        {error.stack}
      </h1>
      <div className="flex justify-center my-4">
        <Button action={reset}>Try again</Button>
      </div>
    </main>
  );
};

export default ErrorPage;
