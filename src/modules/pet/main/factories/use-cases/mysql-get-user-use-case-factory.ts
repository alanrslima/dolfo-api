import {GetUserUseCase} from '../../../application/use-cases/get-user-use-case';
import {UserMysqlRepository} from '../../../infra/repositories/mysql/user-mysql-repository';

export const mysqlGetUserUseCaseFactory = (): GetUserUseCase => {
  const userRepository = new UserMysqlRepository();
  return new GetUserUseCase(userRepository);
};
