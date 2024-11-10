import mysql, {
  ConnectionOptions,
  Connection,
  Pool,
  QueryOptions,
} from "mysql2/promise";
import { env } from "../../config";

class MysqlDatabase {
  private accessOptions: ConnectionOptions;
  private connection?: Connection;
  private pool: Pool;
  private static instance: MysqlDatabase;

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

  public static getInstance(): MysqlDatabase {
    if (!MysqlDatabase.instance) {
      MysqlDatabase.instance = new MysqlDatabase();
    }
    return MysqlDatabase.instance;
  }

  async connect() {
    this.connection = await mysql.createConnection(this.accessOptions);
  }

  async disconnect() {
    if (this.connection) {
      this.connection.destroy();
    }
  }

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

  async query(props: QueryOptions) {
    const connection = await this.pool.getConnection();
    const [response] = await connection.query(props);
    connection.release();
    this.pool.releaseConnection(connection);
    return response as any[];
  }
}

export default MysqlDatabase.getInstance();
