import { cn } from "@/lib/utils";
import Link from "next/link";

export type SidebarGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function Sidebar({ className, children }: SidebarGenericProps) {
  return (
    <aside className={cn(["border-r border-border flex flex-col", className])}>
      {children}
    </aside>
  );
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}
export function SidebarHeaderTitle({
  className,
  children,
}: SidebarGenericProps) {
  return <h2 className={cn(["", className])}>{children}</h2>;
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
  return <main className={cn(["p-6", className])}>{children}</main>;
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}
export function SidebarNavMain({ className, children }: SidebarGenericProps) {
  return <nav className={cn(["flex flex-col", className])}>{children}</nav>;
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}
export function SidebarNavHeaderTitle({
  className,
  children,
}: SidebarGenericProps) {
  return (
    <h4
      className={cn([
        "text-xs text-muted-foreground uppercase ml-3",
        className,
      ])}
    >
      {children}
    </h4>
  );
}

type SidebarNavLinkProps = {
  href: string;
};

export function SidebarNavLink({
  className,
  children,
  href,
}: SidebarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link href={href} className={cn(["text-sm px-3 py-2", className])}>
      {children}
    </Link>
  );
}
export function SidebarFooter({ className, children }: SidebarGenericProps) {
  return (
    <footer className={cn(["p-6 mt-auto border-t border-border", className])}>
      {children}
    </footer>
  );
}
