"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const SideBar = ({ user }: SiderbarProps) => {
    const pathname=usePathname();
  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12
            cursor-pointer flex items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="size-[24px] max-xl:size-14"
          ></Image>
          <h1 className="sidebar-logo">Banky</h1>
        </Link>
        {sidebarLinks.map((item) => {
            const isActive = pathname === item.route ;
          return (
            <Link key={item.label} href={item.route}
             className={cn("sidebar-link",{
                'bg-bank-gradient':isActive
             })}>
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({'brightness-[3] invert-0':isActive})}
                />
           

              </div>
              <p className={cn('sidebar-label' ,{'!text-white':isActive})}>
                {item.label}
              </p>
            </Link>
          );
        })}
        user
      </nav>
      footer
    </div>
  );
};

export default SideBar;
