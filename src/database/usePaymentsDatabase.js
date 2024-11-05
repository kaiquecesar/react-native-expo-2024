import { useSQLiteContext } from "expo-sqlite";

export function usePaymentsDatabase() {
  const database = useSQLiteContext();

  async function createPayment({
    user_id,
    user_cadastro,
    valor_pago,
    data_pagamento,
    observacao,
    numero_recibo
  }) {
    const statement = await database.prepareAsync(`
                INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, observacao, numero_recibo) 
                VALUES ($user_id, $user_cadastro, $valor_pago, $data_pagamento, $observacao, $numero_recibo)
                `);

    try {
      const result = await statement.executeAsync({
        $user_id: user_id,
        $user_cadastro: user_cadastro,
        $valor_pago: valor_pago,
        $data_pagamento: data_pagamento,
        $observacao: observacao,
        $numero_recibo: numero_recibo
      });

      const insertedID = result.lastInsertRowId.toString();
      return { insertedID };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function getPayments() {
    try {
      const payments = await database.getAllAsync("SELECT p.*, u.nome FROM payments p, users u WHERE u.id = p.user_id");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { createPayment, getPayments };
}
