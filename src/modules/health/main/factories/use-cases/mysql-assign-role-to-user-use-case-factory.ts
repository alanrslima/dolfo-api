import {AssignRoleToUserUseCase} from '../../../application/use-cases/assign-role-to-user-use-case';
import {RoleMysqlRepository} from '../../../infra/repositories/mysql/role-mysql-repository';
import {UserMysqlRepository} from '../../../infra/repositories/mysql/user-mysql-repository';

export const mysqlAssignRoleToUserUseCaseFactory =
  (): AssignRoleToUserUseCase => {
    const roleMysqlRepository = new RoleMysqlRepository();
    const userMysqlRepository = new UserMysqlRepository();
    return new AssignRoleToUserUseCase(
      roleMysqlRepository,
      userMysqlRepository,
    );
  };
