export default {
  name: 'sito',
  mark: 'segnare',
  setup: 'configurazione',
  phpVersion: 'versione PHP',
  newProject: 'Nuovo Progetto',
  dir: 'Directory',
  frameWork: 'Framework',
  newProjectTips:
    'Creazione di un nuovo progetto con Composer, inizializzazione con il framework selezionato, supporta: wordpress, laravel, yii2, symfony, thinkphp, codeIgniter, cakephp, slim',
  toCreateHost: 'Crea Host',
  dnsInfo:
    `Attiva un server DNS. Risolvi il nome di dominio impostato nel file /etc/hosts sull'IP locale. Principalmente utilizzato per consentire ad altri computer o telefoni sulla rete locale di accedere al sito locale. \n` +
    'Questa funzionalità richiede Node.js, quindi se non lo hai installato, installalo prima.\n' +
    'Come usarlo.\n' +
    '1. Avvia il server DNS.\n' +
    `2. Sugli altri computer o telefoni, configura il DNS della rete, inserisci l'IP del DNS visualizzato nell'interfaccia attuale. È meglio mantenere solo questa configurazione DNS e ripristinarla dopo l'uso.\n` +
    '3. Usa questo comando per testare: dig {ip} dominio\n' +
    '4. Sugli altri computer o telefoni, usa il nome di dominio del sito locale per accedere.\n',
  staticSite: 'Sito Statico',
  park: 'Genera Siti Sottostanti',
  hostsCopy: 'Copia il testo degli host',
  hostsOpen: 'Apri file host personalizzato',

  placeholderName: 'nome host es: www.xxx.com',
  placeholderAlias: 'alias host es: www.xxx.com',
  placeholderRemarks: 'osservazioni host',
  placeholderRootPath: 'percorso radice host',
  hostPort: 'Porta',
  hostSSL: 'SSL',

  parkConfim: 'Sei sicuro di voler generare i siti basati su sottodirectory?',

  autoSSL: 'Certificati SSL Automatici',

  phpMyAdminInstallTips:
    'Nessun sito phpMyAdmin trovato con il dominio phpmyadmin.phpwebstudy.test, scaricare phpMyAdmin e creare il sito?',
  phpMyAdminTaskRunning: 'Scaricamento phpMyAdmin e creazione del sito',

  warning: 'Avviso',
  noPhpWarning:
    'Verifica che nessuna versione PHP sia selezionata, verrà creato un sito statico e i file PHP non potranno essere eseguiti. Sei sicuro di voler continuare?',

  enable: 'Abilitare',

  hostsWriteTips: 'Abilitare / Disabilitare tutti gli host in questa lista',

  sort: 'Ordina'
}
