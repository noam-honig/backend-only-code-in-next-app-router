"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Test } from "../shared/testController";

export default function Home() {
  return <button onClick={()=>{
    Test.testing()
  }}>My Button</button>;
}
