import Model from "../models/model.ts";;
const { cwd } = Deno;

class Controller {
  static async getRootHandler(ctx: any) {
    let dataComotan = await Model.fetchData()
      
    ctx.render(`${cwd()}/views/index.ejs`, {
      title: "Testing",
      data: dataComotan
    });
  }
}

export default Controller;