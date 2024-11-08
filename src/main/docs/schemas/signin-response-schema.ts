export const signinResponse = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
    },
  },
  required: ['token'],
};
