"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function MobileCompanySearch() {
	const router = useRouter();
	const [query, setQuery] = useState("");

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
    const trimmed = query.replace(/\s+/g, " ").trim();
		if (!trimmed) return;
    router.push(`/portfolio?q=${encodeURIComponent(trimmed)}`);
	};

	return (
  <div className="md:hidden">
    <form onSubmit={onSubmit} className="mx-auto mt-4 w-full max-w-md px-4">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="size-5 text-neutral-500" />
        </div>
        <input
						type="search"
						inputMode="search"
						placeholder="Search companies..."
						aria-label="Search companies"
						className="block w-full rounded-full border border-neutral-200 bg-white/90 py-3 pl-11 pr-28 text-base shadow-sm backdrop-blur-sm placeholder:text-neutral-400 focus:border-[#169D53] focus:outline-none focus:ring-2 focus:ring-[#169D53]/30"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
        <button
						type="submit"
						className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#169D53] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0e7c40]"
					>
          Search
        </button>
      </div>
    </form>
  </div>
	);
}
