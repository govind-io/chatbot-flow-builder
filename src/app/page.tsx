"use client";

import HomeHeader from "@components/home/Header";
import {registerServiceWorker} from "@/utils/registerServiceWorker";
import {useEffect} from "react";
import styles from "@styles/home/home-page.module.scss";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import StoreProvider from "@/store/provider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentArea from "@components/home/contentArea/ContentArea";
import SideBar from "@components/home/contentArea/sidebar/Sidebar";
import {ReactFlowProvider} from "reactflow";

export default function Home() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <main>
      <ReactFlowProvider>
        <StoreProvider>
          <ToastContainer />

          <HomeHeader />
          <DndProvider backend={HTML5Backend}>
            <div className={styles["home-container"]}>
              <ContentArea />
              <SideBar />
            </div>
          </DndProvider>
        </StoreProvider>
      </ReactFlowProvider>
    </main>
  );
}
