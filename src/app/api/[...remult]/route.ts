import { remultNextApp } from "remult/remult-next";
import { Test } from "../../../shared/testController";
import { Task } from "../../../shared/Task";

export const api = remultNextApp({
  entities: [Task],
  controllers: [Test],
});

export const { GET, POST, PUT, DELETE } = api;
