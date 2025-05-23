"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Hi! Can you generate a React component?",
  },
  {
    id: "2",
    role: "assistant",
    content: "Sure! Here's a basic button component using React and Tailwind CSS.",
  },
  {
    id: "3",
    role: "user",
    content: "Nice! Can you also add click functionality?",
  },
  {
    id: "4",
    role: "assistant",
    content: "Of course. I'll update it with a click handler that logs to the console.",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: input },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen w-[50%] bg-gray-1000 border-l border-gray-700 border-r border-gray-700align-middle text-gray-100">
      <div className="border-b text-center border-gray-700 p-4 text-lg font-semibold">
        CraftReact Chat
      </div>

      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full px-4 py-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 mb-7 rounded-2xl max-w-[80%] whitespace-pre-wrap ${
                msg.role === "user"
                  ? "ml-auto bg-white text-black"
                  : "mr-auto bg-none"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </ScrollArea>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex items-center gap-2 p-4"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="bg-gray-800 border-gray-600 text-gray-100 w-full max-w-xl"
          
        />
        <Button type="submit" >
            <Send />
        </Button>
      </form>
    </div>
  );
}
