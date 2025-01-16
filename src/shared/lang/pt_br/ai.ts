export default {
  选择站点目录: 'Selecionar Diretório do Site',
  选择文件夹: 'Selecionar Pasta',

  错误类型: 'Tipo de Erro',
  type403: `Um erro 403 geralmente identifica a falta de permissões, que pode ser investigada das seguintes maneiras:
  1. Verifique se a pasta pertence ao usuário, seja o usuário atual ou root, se não for, recomenda-se alterar a pasta.
  2. Verifique as permissões de execução da pasta, se estão configuradas como 755 ou 777. O software atualizará as permissões para 755 ao adicionar sites, mas se a pasta estiver em diretórios do sistema, talvez não seja possível alterar. Recomenda-se mudar a pasta.
  3. Verifique os usuários de inicialização do serviço, como o usuário de inicialização do nginx ou apache. A configuração padrão do software está correta, mas se modificada, tente usar a configuração padrão novamente.`,
  type404: `Um erro 404 geralmente indica que o arquivo correspondente à página não foi encontrado. Você pode investigar nos seguintes aspectos:
  1. Verifique se há o arquivo correspondente no diretório do site, como index.php ou index.html no diretório raiz.
  2. Verifique o arquivo de configuração do nginx ou apache, se foi modificado o documento padrão.
  3. Alguns projetos necessitam de configuração de pseudo-estático, como ThinkPHP, Laravel, etc. Para o Apache, os arquivos pseudo-estáticos geralmente estão incluídos no projeto, e no nginx, é necessário adicionar essa configuração ao adicionar o site.`,
  type502: `Um erro 50X geralmente identifica um erro de execução do projeto ou um erro de timeout. Caso esteja acessando via domínio ou usando VPN global, pode ocorrer um erro 502. Recomenda-se desligar a VPN global e tentar novamente.`,

  任务已终止: 'Tarefas foram abortadas',
  当前有任务正在执行: 'Há uma tarefa em andamento, por favor, aguarde a conclusão.',
  尚不能执行此任务:
    'Esta tarefa ainda não pode ser executada, por favor, selecione uma das tarefas disponíveis.',

  未发现可用版本: 'Nenhuma versão disponível encontrada, instale primeiro',
  Apache服务启动成功: 'Serviço Apache iniciado com sucesso',
  服务启动失败端口占用: `Falha ao iniciar o serviço devido ao erro:
{err}
Motivo do erro identificado: Ocupação de porta, tente encerrar o processo que está ocupando a porta`,

  成功创建站点: 'Site criado com sucesso',
  站点域名: 'Domínio do Site',
  站点目录: 'Diretório do Site',
  尝试开启服务: 'Tentando iniciar o serviço, por favor, aguarde...',
  服务启动成功: 'Serviço iniciado com sucesso',
  域名: 'Domínio',
  已在浏览器中打开: 'Já aberto no seu navegador, por favor, verifique',
  服务启动失败: `Falha ao iniciar o serviço, causa:
{err}
Por favor, tente iniciar o serviço manualmente`,

  MariaDB服务启动成功: 'Serviço MariaDB iniciado com sucesso',
  Memcached服务启动成功: 'Serviço Memcached iniciado com sucesso',
  Mysql服务启动成功: 'Serviço Mysql iniciado com sucesso',
  Nginx服务启动成功: 'Serviço Nginx iniciado com sucesso',
  Php服务启动成功: 'Serviço Php{num} iniciado com sucesso',

  尝试启动Apache服务: 'Tentando iniciar o serviço Apache...',

  请输入或选择站点目录: 'Por favor, insira ou selecione um diretório de site',
  站点目录无效: 'Diretório do site inválido, tarefa abortada',
  请输入站点域名: 'Por favor, insira o domínio do site, ex: www.test.com',
  域名无效: 'Nome de domínio inválido, tarefa abortada',
  创建站点中: 'Criando site...',

  请查看日志: 'Por favor, verifique o log de {flag} e me envie a mensagem de erro.',
  识别到端口占用:
    'Motivo do erro identificado: Ocupação de porta, tente encerrar o processo que está ocupando a porta',
  未识别到错误原因:
    'O motivo do erro não foi identificado, não pode ser processado no momento, aguarde a atualização',
  识别到Socket占用:
    'Motivo do erro identificado: Ocupação de arquivo socket, tente encerrar o processo que está ocupando o arquivo socket.',
  尝试启动Nginx服务: 'Tentando iniciar o serviço Nginx...',
  站点错误码是否以下几种: 'O código de erro do site é um dos seguintes?',
  任务执行失败: `A execução da tarefa falhou devido a:
 {err}`,

  我是pipi: `Oi, eu sou o pipi. Como posso te ajudar?`,
  你的要求: 'Você pode digitar diretamente suas necessidades, como criar um novo site',

  brewPhp7Issues: `O repositório oficial do Homebrew PHP mantém apenas as versões mais recentes. Se você precisar instalar uma versão mais antiga, como o PHP 7.4, será necessário usar um repositório de terceiros. O programa instalará automaticamente por padrão, mas devido a problemas de rede e falta de fontes de espelho, a instalação pode falhar. Neste caso, você pode instalá-lo manualmente com o seguinte comando:
brew tap shivammathur/php`,
  brewNetIssues: `Se você não consegue obter a versão, provavelmente é um problema de rede. O programa tentará automaticamente usar o repositório de terceiros shivammathur/php por padrão, e como não há fontes de espelho nesse repositório, a instalação pode travar. Recomenda-se usar uma VPN, obter o comando de proxy do terminal do software VPN, configurá-lo nas Configurações->Configurações de Proxy do software, e depois ativar o proxy. Tente novamente para ver se a versão pode ser obtida e instalada.`,
  brewSlowIssues: `Se a instalação de versões estiver muito lenta, provavelmente é um problema de rede. Você pode tentar mudar os espelhos do Homebrew e tentar novamente. A maneira mais recomendada é usar uma VPN. Obtenha o comando de proxy do terminal do software VPN, configure-o nas Configurações->Configurações de Proxy do software, e depois ative o proxy. Tente novamente para ver se você consegue obter e instalar a versão.`,
  macportsNotInstall: `O MacPorts não foi detectado no sistema. Se você deseja instalá-lo, clique no link a seguir
<a href="javascript:void();" onclick="openUrl('https://www.macports.org/install.php')">https://www.macports.org/install.php</a>
Siga a documentação para instalar.
Após a instalação, você pode mudar o espelho do MacPorts nas configurações para aumentar a velocidade de instalação do software.`,
  macportsHasInstall: `O MacPorts foi detectado como instalado no sistema. Se você não consegue instalar o software ou se ele instala lentamente, tente mudar o espelho do MacPorts nas configurações.`,
  brewNotInstall: `O Homebrew não foi detectado no seu sistema. Se você deseja instalá-lo, clique no link a seguir
<a href="javascript:void();" onclick="openUrl('https://www.macphpstudy.com/zh/help-4-2.html')">https://www.macphpstudy.com/zh/help-4-2.html</a>
Siga a documentação para instalá-lo.`,
  brewHasInstall: `O Homebrew foi detectado como instalado no sistema. Se você tiver problemas para instalar ou desinstalar o software através do aplicativo, tente executar os comandos manualmente a partir da linha de comando.`,
  mysqlPassword: `A senha inicial da conta para o banco de dados Mysql&MariaDB é root root.
O programa não possui uma ferramenta de gerenciamento de dados de banco de dados. Se precisar alterar a senha ou gerenciar os dados do banco, pode usar uma das seguintes ferramentas:
phpMyAdmin <a href="javascript:void();" onclick="openUrl('https://www.phpmyadmin.net/')">https://www.phpmyadmin.net/</a>
Navicat <a href="javascript:void();" onclick="openUrl('https://www.navicat.com/')">https://www.navicat.com.cn/</a>
MySQL Workbench <a href="javascript:void();" onclick="openUrl('https://www.mysql.com/products/workbench/')">https://www.mysql.com/products/workbench/</a>
DataGrip <a href="javascript:void();" onclick="openUrl('https://www.jetbrains.com/datagrip/')">https://www.jetbrains.com/zh-cn/datagrip/</a>
DbGate <a href="javascript:void();" onclick="openUrl('https://dbgate.org/')">https://dbgate.org/</a>
DBeaver <a href="javascript:void();" onclick="openUrl('https://dbeaver.io/')">https://dbeaver.io/</a>
Se houver outras ferramentas que você considere boas, entre em contato comigo para adicioná-las.`
}
