"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List, X, MoreVertical } from "lucide-react";

interface HistoryItem {
  id: string;
  name: string;
}

interface SidebarProps {
  history: HistoryItem[];
  profile: {
    name: string;
    avatarUrl?: string;
  };
}

export default function Sidebar({ history, profile }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-gray-100 transition-transform duration-200 z-30 flex flex-col justify-between ${
          open ? "translate-x-0 w-64 border-r border-gray-700" : "-translate-x-full w-0 border-none"
        }`}
      >
        {/* Top Bar with Title */}
        <div className={`flex items-center justify-between p-4 ${open ? "border-b border-gray-700" : ""}`}>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              className="text-gray-100"
            >
              {open ? <X size={20} /> : <List size={20} />}
            </Button>
            {open && <div className="text-lg font-semibold">History</div>}
          </div>
        </div>

        {/* History */}
        <div className="flex-1 overflow-y-auto mt-2 px-2 space-y-1">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded hover:bg-gray-800 cursor-pointer"
            >
              <span className={`truncate ${open ? "block" : "hidden"}`}>{item.name}</span>
              {open && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-100">
                      <MoreVertical size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" className="bg-gray-800 text-gray-100">
                    <DropdownMenuItem className="hover:bg-gray-700">Rename</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-700">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
        </div>

        {/* Profile */}
        <div className={`p-4 flex items-center space-x-2 ${open ? "border-t border-gray-700" : ""}`}>
          {open && (
            <>
              <Avatar>
                {profile.avatarUrl ? (
                  <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                ) : (
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
              <span className="font-medium truncate max-w-[120px]">{profile.name}</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
