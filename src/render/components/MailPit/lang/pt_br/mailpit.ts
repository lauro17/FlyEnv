export default {
  MP_DATABASE:
    'Especifique o nome do arquivo do banco de dados local para armazenar dados persistentes. O padrão é um arquivo temporário local, que é excluído automaticamente quando o Mailpit é encerrado. Você pode, opcionalmente, usar um banco de dados remoto rqlite especificando um “endereço http” (veja a documentação).',
  MP_LABEL:
    'Defina um rótulo opcional para identificar esta instância do Mailpit. Este rótulo será adicionado à interface web, aos servidores SMTP e POP3.',
  MP_TENANT_ID:
    'Defina um ID de inquilino (prefixo de tabela). Isso é usado para isolar os dados de outras instâncias do Mailpit que compartilham o mesmo arquivo de dados (veja a documentação).',
  MP_MAX_MESSAGES:
    'Número máximo de mensagens a serem armazenadas. O Mailpit excluirá periodicamente as mensagens mais antigas se exceder esse valor. Defina como 0 para desativar a exclusão automática (veja a documentação).',
  MP_MAX_AGE:
    'Idade máxima das mensagens a serem armazenadas em (h)oras ou (d)ias. O Mailpit excluirá periodicamente as mensagens mais antigas se exceder esse valor. O valor deve estar em horas (ex: --max-age 36h) ou dias (ex: --max-age 14d) (veja a documentação).',
  MP_USE_MESSAGE_DATES:
    'Usar a data do cabeçalho da mensagem como a data e hora recebida pelo Mailpit, em vez da data e hora recebida via SMTP.',
  MP_IGNORE_DUPLICATE_IDS: 'Ignorar mensagens duplicadas com base nos Message-Ids.',
  MP_LOG_FILE:
    'Registrar a saída do Mailpit em um arquivo, em vez de stdout. Exemplo: --log-file /caminho/para/logfile.log',
  MP_QUIET: 'Registro silencioso (somente erros)',
  MP_VERBOSE: 'Registro detalhado (debug)',
  MP_UI_BIND_ADDR: 'Interface HTTP e porta para a UI.',
  MP_WEBROOT:
    'Defina o webroot para a UI e API, por exemplo, mail resultaria em http://0.0.0.0:8025/mail/.',
  MP_UI_AUTH_FILE:
    'Especifique um arquivo de senha para autenticação básica da UI e API (veja a documentação).',
  MP_UI_TLS_CERT:
    'Certificado TLS para a UI e API (ou seja, HTTPS). Esta opção requer o argumento --ui-tls-key ou a variável de ambiente MP_UI_TLS_KEY.',
  MP_UI_TLS_KEY:
    'Chave TLS para a UI e API (ou seja, HTTPS). Esta opção requer o argumento --ui-tls-cert ou a variável de ambiente MP_UI_TLS_CERT.',
  MP_API_CORS:
    'Defina o cabeçalho API CORS Access-Control-Allow-Origin se você precisar de solicitações de navegador de domínios cruzados.',
  MP_BLOCK_REMOTE_CSS_AND_FONTS:
    'Bloquear o acesso de todos os navegadores a CSS e fontes remotas importadas via planilhas de estilo de mensagem. O Mailpit usa o método de Política de Segurança de Conteúdo (CSP) para bloquear isso. Isso não bloqueia imagens remotas ou cliques em links externos.',
  MP_ENABLE_SPAMASSASSIN:
    'Habilitar a integração com o SpamAssassin para pontuação de spam das mensagens (veja a documentação).',
  MP_ALLOW_UNTRUSTED_TLS:
    'Não verificar os certificados HTTPS para o verificador de links e geração de capturas de tela.',
  MP_SMTP_BIND_ADDR: 'Interface SMTP e porta.',
  MP_SMTP_AUTH_FILE:
    'Especifique um arquivo de senha para autenticação SMTP (veja a documentação).',
  MP_SMTP_AUTH_ACCEPT_ANY:
    'Aceitar qualquer nome de usuário e senha SMTP, incluindo nenhum. Use isso para basicamente permitir qualquer coisa.',
  MP_SMTP_TLS_CERT:
    'Certificado TLS para SMTP STARTTLS. Esta opção requer o argumento --smtp-tls-key ou a variável de ambiente MP_SMTP_TLS_KEY.',
  MP_SMTP_TLS_KEY:
    'Chave TLS para SMTP STARTTLS. Esta opção requer o argumento --smtp-tls-cert ou a variável de ambiente MP_SMTP_TLS_CERT.',
  MP_SMTP_REQUIRE_STARTTLS:
    'Exigir que todos os clientes SMTP usem criptografia STARTTLS. Se definido como verdadeiro, os únicos comandos permitidos são NOOP, EHLO, STARTTLS e QUIT (como especificado no RFC 4954), até que a conexão seja atualizada para STARTTLS.',
  MP_SMTP_REQUIRE_TLS:
    'Exigir que todos os clientes SMTP usem criptografia SSL/TLS. Se definido como verdadeiro, todas as conexões ao servidor SMTP devem ser tratadas via TLS. Isso é diferente do STARTTLS, que exige que a conexão inicial seja não criptografada. Observe que esta opção desativa o STARTTLS e pode reduzir a compatibilidade do cliente.',
  MP_SMTP_AUTH_ALLOW_INSECURE:
    'Normalmente, o STARTTLS ou TLS é exigido para todas as autenticações SMTP. Esta opção permite autenticações SMTP inseguras PLAIN e LOGIN ao usar STARTTLS.',
  MP_SMTP_STRICT_RFC_HEADERS:
    'Forçar o Mailpit a retornar um erro SMTP se os cabeçalhos da mensagem contiverem quebras de linha \\n em vez de \\r\\n. Por padrão, o Mailpit corrigirá silenciosamente quebras de linha incorretas geradas por alguns clientes sendmail quebrados (veja o problema relacionado no Github).',
  MP_SMTP_MAX_RECIPIENTS: 'Número máximo de destinatários SMTP permitidos por mensagem.',
  MP_SMTP_ALLOWED_RECIPIENTS: `Permitir apenas destinatários SMTP que correspondem a uma expressão regular. Use isso para restringir o e-mail de entrada apenas para aqueles enviados para uma lista predefinida. Um exemplo seria --smtp-allowed-recipients '{'@'}example.com$' para permitir apenas e-mails enviados para destinatários terminando com {'@'}example.com.`,
  MP_SMTP_DISABLE_RDNS:
    'Desativar as buscas reversas DNS do SMTP. O SMTP, por padrão, tentará resolver o nome do host do endereço IP do cliente conectado, mas em redes de teste isso pode ser problemático, causando atrasos para cada mensagem entregue.',
  MP_SMTP_RELAY_CONFIG:
    'Arquivo de configuração SMTP para habilitar o envio/liberação de mensagens (veja a documentação). Alternativamente, toda a configuração pode ser passada via variáveis de ambiente.',
  MP_SMTP_RELAY_ALL:
    'Enviar automaticamente todas as mensagens recebidas para um servidor SMTP externo (veja a documentação). Use com extrema cautela!',
  MP_SMTP_RELAY_MATCHING:
    'Enviar automaticamente algumas mensagens recebidas para destinatários correspondentes via servidor SMTP externo (veja a documentação).',
  MP_POP3_BIND_ADDR: 'Interface POP3 e porta do servidor.',
  MP_POP3_AUTH_FILE:
    'Especifique um arquivo de senha para autenticação POP3 (veja a documentação).',
  MP_POP3_TLS_CERT:
    'Certificado TLS para POP3 SSL/TLS. Esta opção requer o argumento --pop3-tls-key ou a variável de ambiente MP_POP3_TLS_KEY.',
  MP_POP3_TLS_KEY:
    'Chave TLS para POP3 SSL/TLS. Esta opção requer o argumento --pop3-tls-cert ou a variável de ambiente MP_POP3_TLS_CERT.',
  MP_TAG: 'Auto-marcar novas mensagens que correspondem aos filtros (veja a documentação).',
  MP_TAGS_CONFIG: 'Carregar filtros de tags do arquivo de configuração YAML (veja a documentação).',
  MP_TAGS_TITLE_CASE:
    'Forçar a Capitalização de Títulos para todas as tags recém-criadas (veja a documentação).',
  MP_TAGS_DISABLE:
    'Desabilitar a auto-marcação específica. Esta opção aceita uma lista separada por vírgulas de opções (veja a documentação).',
  MP_WEBHOOK_URL:
    'Chamar um webhook quando novas mensagens forem recebidas (veja a documentação), exemplo: --webhook-url https://example.com/webhook.php.',
  MP_WEBHOOK_LIMIT:
    'Limitar solicitações do webhook por segundo. Para evitar sobrecarregar o servidor webhook, isso é limitado por padrão a no máximo 1 solicitação por segundo (veja a documentação).'
}
