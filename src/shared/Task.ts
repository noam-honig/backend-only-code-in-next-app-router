import { Entity, Fields } from "remult";

@Entity("tasks", { allowApiCrud: true })
export class Task {
  @Fields.cuid()
  id = "";
}
