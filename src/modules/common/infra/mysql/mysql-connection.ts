import mysql, {
  ConnectionOptions,
  Connection,
  Pool,
  QueryOptions,
} from "mysql2/promise";
import { env } from "../../config";

class MysqlDatabase {
  private accessOptions: ConnectionOptions;
  // private connecxtion: Connection;
  private pool: Pool;

  constructor() {
    this.accessOptions = {
      user: env.MYSQL_USER,
      database: env.MYSQL_DATABASE,
      password: env.MYSQL_PASSWORD,
      port: Number(env.MYSQL_PORT),
      host: env.MYSQL_HOST,
    };
    this.pool = mysql.createPool(this.accessOptions);
  }

  // async connect() {
  // this.connection = await mysql.createConnection(this.accessOptions);
  // this.pool = mysql.createPool(this.accessOptions);
  // }

  // async disconnect() {
  //   if (this.connection) {
  //     this.connection.destroy();
  //   }
  // }

  async makeTransaction(
    fn: (connection: mysql.PoolConnection) => Promise<void>
  ) {
    const connection = await this.pool.getConnection();
    try {
      await connection.beginTransaction();
      await fn(connection);
      connection.commit();
    } catch (error) {
      await connection.rollback();
    } finally {
      this.pool.releaseConnection(connection);
    }
  }

  async query(
    sql: string,
    values?: { [key: string]: any } | any[],
    props?: Omit<QueryOptions, "sql" | "values">
  ) {
    const connection = await this.pool.getConnection();
    const response = await connection.query({ sql, values, ...props });
    this.pool.releaseConnection(connection);
    return response;
  }
}

const mysqlDatabase = new MysqlDatabase();
export { mysqlDatabase };
