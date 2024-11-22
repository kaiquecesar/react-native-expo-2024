import { useSQLiteContext } from "expo-sqlite";

export function usePaymentsDatabase() {
  const database = useSQLiteContext();

  async function createPayment({

    //id INTEGER PRIMARY KEY AUTOINCREMENT,
    //pro_nome TEXT,
    //marca TEXT,
    //descricao TEXT,
    //linkcompra TEXT,
    //role
    //created_at DATE DEFAULT CURRENT_TIMESTAMP, 
    //updated_at DATE

    pro_nome,
    marca,
    descricao,
    linkcompra
  }) {
    console.log({
      pro_nome,
      marca,
      descricao,
      linkcompra
    });

    const statement = await database.prepareAsync(`
                INSERT INTO products (pro_nome, marca, descricao, linkcompra) 
                VALUES ($pro_nome, $marca, $descricao, $linkcompra)
                `);

    try {
      const result = await statement.executeAsync({
        $pro_nome: pro_nome,
        $marca: marca,
        $descricao: descricao,
        $linkcompra: linkcompra
      });

      const insertedID = result.lastInsertRowId.toString();
      return { insertedID };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function getProducts(page) {
    try {
      const products = await database.getAllAsync(
        `SELECT * FROM products LIMIT 5 OFFSET ${page * 5};`
      );
      return products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function getProduct(id) {
    try {
      const product = await database.getFirstAsync(
        `SELECT * FROM products id = ${id};`
      );
      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { createProducts, getProducts, getProduct };
}
