import styles from "@styles/home/home-page.module.scss";

export default function HomeHeader() {
  const saveChanges = () => {
    console.log("changes saved");
  };

  return (
    <div className={styles.container}>
      <button onClick={saveChanges}> Save changes</button>
    </div>
  );
}
