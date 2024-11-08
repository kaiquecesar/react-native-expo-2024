import { useSQLiteContext } from "expo-sqlite";

export function useMaintenanceDatabase() {
  const database = useSQLiteContext();

  async function resetDatabase() {
    try {
      await database.transaction(async () => {
        //DELETE -> apaga os dados da tabela/entidade
        //DROP -> apaga a tabela/entidade

        try {
          database.execAsync(
            `DROP INDEX IF EXISTS idx_payments_data_pagamento;`
          );
          database.execAsync(`DROP INDEX IF EXISTS idx_users_nome;`);
          database.execAsync(`DROP TABLE IF EXISTS payments;`);
          database.execAsync(`
            CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nome TEXT,
            curso TEXT,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL DEFAULT 'A123456a!',
            role TEXT NOT NULL DEFAULT 'USER', 
            created_at DATE DEFAULT CURRENT_TIMESTAMP, 
            updated_at DATE
            );
        `);
          database.execAsync(`
            CREATE TABLE payments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            user_cadastro INTEGER NOT NULL,
            valor_pago REAL NOT NULL,
            data_pagamento DATE NOT NULL,
            numero_recibo TEXT NOT NULL,
            observacao TEXT,
            created_at DATE DEFAULT CURRENT_TIMESTAMP, 
            updated_at DATE,
            FOREIGN KEY(user_id) REFERENCES users(id),
            FOREIGN KEY(user_cadastro) REFERENCES users(id)
            );
        `);

          database.execAsync(`CREATE INDEX IF NOT EXISTS idx_users_nome ON users (nome);`);
          database.execAsync(`CREATE INDEX IF NOT EXISTS idx_payments_data_pagamento ON payments (data_pagamento);`);
          database.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Super', 'super@gmail.com', 'super!', 'SUPER');`);
          database.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', 'admin@gmail.com', 'admin!', 'ADMIN');`);
          database.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('User', 'user@gmail.com', 'user!', 'USER');`);
        } catch (error) {
          console.log("useMaintenanceDatabase resetDatabase error: ", error);
        }
      });
      console.log("useMaintenanceDatabase resetDatabase sucess: ");
    } catch (error) {
      console.log("useMaintenanceDatabase resetDatabase error: ", error);
    }
  }
  return { resetDatabase };
}
