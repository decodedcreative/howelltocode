"use client";

import { Button } from "@repo/design-system";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">James Howell</h1>
      <p className="text-text-secondary">Portfolio — coming soon.</p>
      <Button variant="primary">Get in touch</Button>
    </main>
  );
}
