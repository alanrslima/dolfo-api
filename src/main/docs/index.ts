import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Navega Consultoria API',
    description: 'Essa é a documentação da API da Navega Consultoria',
    version: '1.0.0',
    contact: {
      name: 'Alan Lima',
      email: 'alanlima@navegaconsultoria.com.br',
      url: 'https://www.navegaconsultoria.com.br/index.html',
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Login',
      description: 'APIs relacionadas a Login',
    },
  ],
  paths,
  schemas,
  components,
};
