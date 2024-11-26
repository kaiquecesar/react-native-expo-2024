import { useSQLiteContext } from "expo-sqlite";

export function useProductsDatabase() {
  const database = useSQLiteContext();

  async function createProducts({
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
    linkcompra,
    imagem
  }) {
    console.log({
      pro_nome,
      marca,
      descricao,
      linkcompra,
      imagem
    });

    const statement = await database.prepareAsync(`
                INSERT INTO products (pro_nome, marca, descricao, linkcompra, imagem) 
                VALUES ($pro_nome, $marca, $descricao, $linkcompra, $imagem)
                `);

    try {
      const result = await statement.executeAsync({
        $pro_nome: pro_nome,
        $marca: marca,
        $descricao: descricao,
        $linkcompra: linkcompra,
        $imagem: imagem
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

  async function setImageProducts(id, filename) {
    const updated_at = new Date()
      .toLocaleString("pt-BR")
      .replace("T", " ")
      .split(".")[0];
    const statement = await database.prepareAsync(`
      UPDATE products SET imagem = $filename, updated_at = $updated_at WHERE id = $id
    `);

    try {
      const result = await statement.executeAsync({
        $filename: filename,
        $updated_at: updated_at,
        $id: id
      });
      return result.changes;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  return { createProducts, getProducts, getProduct, setImageProducts };
}
