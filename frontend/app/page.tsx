import Chat from "@/components/Chat/Chat";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./page.module.css";
import Preview from "@/components/Preview/Preview";

export default function Home() {
  const history = [
    { id: "1", name: "History-1" },
    { id: "2", name: "History-2" },
    { id: "3", name: "History-3" },
    { id: "11", name: "History-1" },
    { id: "21", name: "History-2" },
    { id: "31", name: "History-3" },
    { id: "12", name: "History-1" },
    { id: "22", name: "History-2" },
    { id: "32", name: "History-3" },
    { id: "13", name: "History-1" },
    { id: "23", name: "History-2" },
    { id: "33", name: "History-3" },
  ];

  const profile = {
    name: "John Doe",
    avatarUrl: "", 
  };

  return (
    <div className={`${styles.page}`}>
      <Sidebar history={history} profile={profile} />
      <div className="flex justify-between">
      <Chat/>
      <Preview/>
      </div>
    </div>
  );
}
