"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8 mx-auto">
        <Link href="/" className="flex items-center space-x-2 pl-2">
          <span className="text-xl font-bold">WebTech Hub</span>
        </Link>
        <nav className="flex items-center gap-4 pr-2">
          <Link href="/login">
            <Button variant="secondary">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}