"use client";

import HomeHeader from "@components/home/Header";
import {registerServiceWorker} from "@/utils/registerServiceWorker";
import {useEffect} from "react";
import ContentArea from "@components/home/contentArea/ContentArea";
import SideBar from "@components/home/contentArea/sidebar/Sidebar";
import styles from "@styles/home/home-page.module.scss";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function Home() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <main>
      <HomeHeader />
      <DndProvider backend={HTML5Backend}>
        <div className={styles["home-container"]}>
          <ContentArea />
          <SideBar />
        </div>
      </DndProvider>
    </main>
  );
}
