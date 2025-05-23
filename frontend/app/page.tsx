import styles from "./page.module.css";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className={styles.page}>
    <h1 className="text-xl font-bold">
      Hello world!
    </h1>
    <Button>Click me</Button>
    </div>
  );
}
