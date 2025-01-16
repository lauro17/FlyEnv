export default {
  name: 'site',
  mark: 'marcar',
  setup: 'configuração',
  phpVersion: 'versão PHP',
  newProject: 'Novo Projeto',
  dir: 'Diretório',
  frameWork: 'Framework',
  newProjectTips:
    'Criando um novo projeto com o Composer, inicialize com o framework selecionado, suporta: wordpress, laravel, yii2, symfony, thinkphp, codeIgniter, cakephp, slim',
  toCreateHost: 'Criar Host',
  dnsInfo:
    'Ative um servidor DNS. Resolva o nome de domínio configurado no arquivo /etc/hosts para o IP local. Principalmente usado para outros computadores ou telefones na rede local acessarem o site local. \n' +
    'Esse recurso requer o Node.js, então, se você não o tiver instalado, instale-o primeiro.\n' +
    'Como usar.\n' +
    '1. Inicie o servidor DNS.\n' +
    '2. Nos outros computadores ou telefones, configure o DNS da rede, insira o IP do DNS exibido na interface atual. É melhor manter apenas essa configuração de DNS e restaurá-la após o uso.\n' +
    '3. Use este comando para testar: dig {ip} domínio\n' +
    '4. Nos outros computadores ou telefones, use o nome de domínio do site local para acessar.\n',
  staticSite: 'Site Estático',
  park: 'Gerar Sub-Sites',
  hostsCopy: 'Copiar texto de hosts',
  hostsOpen: 'Abrir arquivo de hosts personalizado',

  placeholderName: 'nome do host ex: www.xxx.com',
  placeholderAlias: 'alias do host ex: www.xxx.com',
  placeholderRemarks: 'observações do host',
  placeholderRootPath: 'caminho raiz do host',
  hostPort: 'Porta',
  hostSSL: 'SSL',

  parkConfim: 'Tem certeza de que deseja gerar sites com base em subdiretórios?',

  autoSSL: 'Certificados SSL Automáticos',

  phpMyAdminInstallTips:
    'Nenhum site phpMyAdmin encontrado com o domínio phpmyadmin.phpwebstudy.test, Baixar phpMyAdmin e criar o site?',
  phpMyAdminTaskRunning: 'Baixando phpMyAdmin e criando o site',

  warning: 'Aviso',
  noPhpWarning:
    'Verifique se nenhuma versão PHP está selecionada, um site estático será criado, e os arquivos PHP não poderão ser executados. Tem certeza de que deseja continuar?',

  enable: 'Habilitar',

  hostsWriteTips: 'Habilitar / Desabilitar todos os hosts nesta lista',

  sort: 'Ordenar'
}
