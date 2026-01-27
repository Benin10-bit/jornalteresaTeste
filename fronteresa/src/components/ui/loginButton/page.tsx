import { LoginLinkProps } from "@/types/LoginLinkProps";
import Link from "next/link";

export default function LoginButton({
  href,
  label = "Entrar",
}: LoginLinkProps) {
  return (
    <Link
      href={href}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-md
        text-sm font-medium
        text-[var(--cards)]
        bg-[var(--botoes)]
        shadow-[var(--shadow)]
        transition-colors duration-200
        hover:bg-[var(--hover)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--links)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--background)]
      "
    >
      <svg
        className="h-4 w-4 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
      </svg>

      <span>{label}</span>
    </Link>
  );
}
