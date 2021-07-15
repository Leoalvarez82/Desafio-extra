import { ProductCollection, Product } from "./models";
class ProductController {
  products: ProductCollection;
  promesa: Promise<any>;
  constructor() {
    this.products = new ProductCollection();
    const promesa = this.products.getAll();
    this.promesa = promesa;
  }
  processOptions(option) {
    if (option.search) {
      return this.products.getById(option.search);
    } else {
      return this.products.getAll();
    }
  }
}
export { ProductController };
