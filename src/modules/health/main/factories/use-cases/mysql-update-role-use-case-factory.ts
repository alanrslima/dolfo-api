import {UpdateRoleUseCase} from '../../../application/use-cases/update-role-use-case';
import {RoleMysqlRepository} from '../../../infra/repositories/mysql/role-mysql-repository';

export const mysqlUpdateRoleUseCaseFactory = (): UpdateRoleUseCase => {
  const roleMysqlRepository = new RoleMysqlRepository();
  return new UpdateRoleUseCase(roleMysqlRepository);
};
