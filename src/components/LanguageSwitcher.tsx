"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function LanguageSwitcher() {
  const pathname = usePathname();
  // const router = useRouter();

  return (
    <div className="flex flex-col">
      <Link href={pathname} locale="he">
        🇮🇱 עברית
      </Link>
      <Link href={pathname} locale="ru">
        Русский 🇷🇺
      </Link>
    </div>
  );
}
