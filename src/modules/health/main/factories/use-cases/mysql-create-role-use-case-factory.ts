import {CreateRoleUseCase} from '../../../application/use-cases/create-role-use-case';
import {RoleMysqlRepository} from '../../../infra/repositories/mysql/role-mysql-repository';

export const mysqlCreateRoleUseCaseFactory = (): CreateRoleUseCase => {
  const roleMysqlRepository = new RoleMysqlRepository();
  return new CreateRoleUseCase(roleMysqlRepository);
};
