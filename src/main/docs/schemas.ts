import {
  accountSchema,
  signinParamsSchema,
  errorSchema,
  signUpParamsSchema,
  signinResponse,
} from './schemas/';

export default {
  account: accountSchema,
  signinResponse: signinResponse,
  signinParams: signinParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
};
