import Sidebar from "../components/Sidebar";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  const history = [
    { id: "1", name: "History-1" },
    { id: "2", name: "History-2" },
    { id: "3", name: "History-3" },
  ];

  const profile = {
    name: "John Doe",
    avatarUrl: "", 
  };

  return (
    <div className={styles.page}>
      <Sidebar history={history} profile={profile} />
      
    </div>
  );
}
