import { useSQLiteContext } from "expo-sqlite";

export function useMaintenanceDatabase() {
  const database = useSQLiteContext();

  async function resetDatabase() {
    try {
        //DELETE -> apaga os dados da tabela/entidade
        //DROP -> apaga a tabela/entidade
          await database.execAsync(`DROP INDEX IF EXISTS idx_payments_data_pagamento;`);
          await database.execAsync(`DROP INDEX IF EXISTS idx_users_nome;`);
          await database.execAsync(`DROP TABLE IF EXISTS payments;`);
          await database.execAsync(`DROP TABLE IF EXISTS users;`);
          await database.execAsync(`
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
          await database.execAsync(`
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
        
        //para toda pesquisa /ordenação no banco que não seja chave primeira, vc deve criar indices
          database.execAsync(`CREATE INDEX IF NOT EXISTS idx_users_nome ON users (nome);`);
          database.execAsync(`CREATE INDEX IF NOT EXISTS idx_payments_data_pagamento ON payments (data_pagamento);`);
          
        /*
         *#TODO - Acicionar usuários padrão
        */  
          database.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Super', 'super@gmail.com', 'super!', 'SUPER');`);
          database.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', 'admin@gmail.com', 'admin!', 'ADMIN');`);
          database.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('User', 'user@gmail.com', 'user!', 'USER');`);
        
        console.log("Database reset successfully");
        } catch (error) {
          console.log("useMaintenanceDatabase resetDatabase error: ", error);
          throw error;
        }
      }

      async function importUsers() {
        const URL = "https://api.mockaroo.com/api/122ae070?count=406key=1af2bf00"

        try {
          //recupera/solicita os dados da API/ da internet
          const response = await fetch(URL);
          //converte a resposta para o padrão jason -> Javascript object notation
          //converte a resposta para o tipo texto
          const users = await response.text();

          await database.withTransactionAsync(async () => {
            users.split(/\r?\n/).forEach(async (line) => {
              try {
                await database.execAsync(line);
              } catch (error) {
                console.error("error importing user: ", error);
              }
            })
          })
          console.log("Usuários importados com sucesso")
        } catch (error) {
          consolen.error("useMaintenanceDatabase importUsers error", error);
          throw error;
        }
      }

      async function importPayments() {
        // implementar a função de importação de pagamentos
        const URL = "https://api.mockaroo.com/api/122ae070?count=406key=1af2bf00"

        try {
          //recupera/solicita os dados da API/ da internet
          const response = await fetch(URL);
          //converte a resposta para o padrão jason -> Javascript object notation
          //converte a resposta para o tipo texto
          const users = await response.text();

          await database.withTransactionAsync(async () => {
            users.split(/\r?\n/).forEach(async (line) => {
              try {
                await database.execAsync(line);
              } catch (error) {
                console.error("error importing user: ", error);
              }
            })
          })
          console.log("Usuários importados com sucesso")
        } catch (error) {
          consolen.error("useMaintenanceDatabase importUsers error", error);
          throw error;
        }
      }
    

  return { resetDatabase, importUsers, importPayments }
}
