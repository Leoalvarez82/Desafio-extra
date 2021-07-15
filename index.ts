import { ProductCollection, Product } from "./models";
import { ProductController } from "./controller";
import * as minimist from "minimist";
function parsearArgv(argv) {
  const resultado = minimist(argv);
  if (resultado.search) {
    return { search: resultado.search };
  } else {
    {
    }
  }
}

function main() {
  const controller = new ProductController();
  controller.promesa.then(() => {
    const parseo = parsearArgv(process.argv.slice(2));
    const result = controller.processOptions(parseo);
    console.log(result);
  });
}
main();
