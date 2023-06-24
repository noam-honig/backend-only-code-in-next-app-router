import { BackendMethod } from "remult";
import fs from "fs";

export class Test {
  @BackendMethod({ allowed: true })
  static async testing() {
    console.log("testing");
    fs.writeFileSync(
      "./tmp/" + new Date().valueOf().toString(),
      new Date().toISOString()
    );
    return "test";
  }
}
