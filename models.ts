import * as jsonfile from "jsonfile";
class Product {
  id: number;
  name: string;
}
class ProductCollection {
  products: Product[];
  getAll() {
    //  jsonfile.readFile("./products.json").then((json)=>{return json})
    const promesa = jsonfile.readFile("./products.json");
    promesa.then((json) => {
      this.products = json;
    });
    return promesa;
  }
  getById(id) {
    return this.getAll().then((p) => {
      const resultado = p.find((a) => {
        return a.id == id;
      });
      return resultado;
    });
  }
}
export { ProductCollection, Product };
const objeto = new ProductCollection();
// console.log(objeto.getAll());
// objeto.getById(2).then((res) => console.log(res));

//  return jsonfile.readFile("./products.json").then((prod)=>{return prod})dice luego de leerlo retorme los productos
// primero se inst. la clase y luego asi el metodo objeto.getAll().then((res) => console.log(res));asi me devuelve en terminalporductos

//otramaneradehacerlo const promesa = jsonfile.readFile("./products.json");
//     promesa.then((json) => {
//       this.products = json;console.log(json)tiene que mostrar el objeto
//       console.log(this); muestra qeu se guardo correctamente en ese archivo
