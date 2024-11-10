import { env } from "../modules/common";
import mysqlDatabase from "../modules/common/infra/mysql/mysql-database";

mysqlDatabase
  .connect()
  .then(async () => {
    const app = (await import("./config/app")).default;
    app.listen(env.PORT, () => {
      console.log(`Server running at http://localhost:${env.PORT}`);
    });
  })
  .catch(console.error);
