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
  const [open, setOpen] = useState(true);

  return (
    <div
  className={`flex flex-col bg-gray-1000 transition-all duration-200 h-screen text-gray-100 ${
    open ? "w-64 border-r border-gray-700" : "w-0 border-none"
  }`}
>
      <div className={`flex items-center p-4 ${open? "border-b border-gray-700": "border-none"}`}>
        <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="text-gray-100">
          {open ? <X size={20} /> : <List size={20} />}
        </Button>
        {<h1 className="font-semibold">CraftReact</h1>}
      </div>

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

      <div className={`p-4 ${open? "border-t border-gray-700": "border-none"}`}>
        <div className="flex items-center space-x-2">
          <Avatar>
            {profile.avatarUrl ? (
              <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            ) : (
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          {open && <span className="font-medium truncate max-w-[120px]">{profile.name}</span>}
        </div>
      </div>
    </div>
  );
}
