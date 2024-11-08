import { env } from "../modules/common";

async function connectMysql() {
  return new Promise((resolve, reject) => {
    resolve(null);
  });
}

connectMysql().then(async () => {
  const app = (await import("./config/app")).default;
  app.listen(env.PORT, () => {
    console.log(`Server running at http://localhost:${env.PORT}`);
  });
});

// mysqlDataSource
//   .connect()
//   .then(async () => {
//     mysqlDatabase
//       .connect()
//       .then(async () => {
//         const app = (await import("./config/app")).default;
//         app.listen(env.port, () => {
//           console.log(`Server running at http://localhost:${env.port}`);
//         });
//       })
//       .catch(console.error);
//   })
//   .catch(console.error);
