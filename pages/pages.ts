import LoginPage from "./LoginPage";
import ProductPage from "./ProductsPage"



export function pages(page) {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page)
    
    return { loginPage , productPage};
  }