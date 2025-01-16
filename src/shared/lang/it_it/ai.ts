export default {
  选择站点目录: 'Seleziona la Directory del Sito',
  选择文件夹: 'Seleziona la Cartella',

  错误类型: 'Tipo di Errore',
  type403: `Un errore 403 generalmente indica la mancanza di permessi, che può essere investigato nei seguenti modi:
  1. Verifica se la cartella appartiene all'utente, che sia l'utente attuale o root, se no, si consiglia di cambiare la cartella.
  2. Verifica i permessi di esecuzione della cartella, se sono 755 o 777. Il software aggiornerà automaticamente i permessi a 755 quando aggiungi siti, ma se la cartella è in directory di sistema, potresti non riuscire a cambiarla. Si consiglia di cambiare la cartella.
  3. Verifica gli utenti di avvio del servizio, come l'utente di avvio di nginx o apache. La configurazione predefinita del software è corretta, ma se modificata, prova a usare la configurazione predefinita.`,
  type404: `Un errore 404 generalmente indica che il file della pagina corrispondente non è stato trovato. Puoi indagare nei seguenti modi:
  1. Verifica se il file corrispondente è presente nella directory del sito, come index.php o index.html nella root.
  2. Controlla il file di configurazione di nginx o apache per vedere se è stato modificato il documento predefinito.
  3. Alcuni progetti richiedono la configurazione del pseudo-statico, come ThinkPHP, Laravel, ecc. Per Apache, i file pseudo-statici sono generalmente inclusi nel progetto, mentre con nginx è necessario aggiungere questa configurazione durante l'aggiunta del sito.`,
  type502: `Un errore 50X generalmente indica un errore di esecuzione del progetto o un timeout. Se accedi tramite dominio o usi una VPN globale, può verificarsi un errore 502. Si consiglia di disabilitare la VPN globale e riprovare.`,

  任务已终止: 'I compiti sono stati annullati',
  当前有任务正在执行: `C'è un compito in corso, attendi il completamento.`,
  尚不能执行此任务:
    'Questo compito non può essere eseguito, seleziona uno dei compiti disponibili.',

  未发现可用版本: 'Nessuna versione disponibile trovata, installa prima',
  Apache服务启动成功: 'Servizio Apache avviato con successo',
  服务启动失败端口占用: `Errore nell'avviare il servizio:
{err}
Motivo del problema identificato: Occupazione della porta, prova a terminare il processo che sta occupando la porta`,

  成功创建站点: 'Sito creato con successo',
  站点域名: 'Dominio del Sito',
  站点目录: 'Directory del Sito',
  尝试开启服务: 'Tentando di avviare il servizio, attendere...',
  服务启动成功: 'Servizio avviato con successo',
  域名: 'Dominio',
  已在浏览器中打开: 'Già aperto nel tuo browser, controlla',
  服务启动失败: `Avvio del servizio fallito, motivo:
{err}
Prova ad avviare manualmente il servizio`,

  MariaDB服务启动成功: 'Servizio MariaDB avviato con successo',
  Memcached服务启动成功: 'Servizio Memcached avviato con successo',
  Mysql服务启动成功: 'Servizio Mysql avviato con successo',
  Nginx服务启动成功: 'Servizio Nginx avviato con successo',
  Php服务启动成功: 'Servizio Php{num} avviato con successo',

  尝试启动Apache服务: 'Tentando di avviare il servizio Apache...',

  请输入或选择站点目录: 'Inserisci o seleziona una directory del sito',
  站点目录无效: 'Directory del sito non valida, compito annullato',
  请输入站点域名: 'Inserisci il dominio del sito, es: www.test.com',
  域名无效: 'Dominio non valido, compito annullato',
  创建站点中: 'Creazione del sito in corso...',

  请查看日志: 'Per favore, guarda il log di {flag} e inviami il messaggio di errore.',
  识别到端口占用:
    'Motivo del problema identificato: Occupazione della porta, prova a terminare il processo che sta occupando la porta',
  未识别到错误原因: `Motivo del problema non identificato, non può essere processato ora, attendi l'aggiornamento`,
  识别到Socket占用:
    'Motivo del problema identificato: Occupazione del socket, prova a terminare il processo che sta occupando il socket.',
  尝试启动Nginx服务: 'Tentando di avviare il servizio Nginx...',
  站点错误码是否以下几种: 'Il codice di errore del sito è uno dei seguenti?',
  任务执行失败: `L'esecuzione del compito è fallita a causa di:
 {err}`,

  我是pipi: `Ciao, sono pipi. Come posso aiutarti?`,
  你的要求: 'Puoi digitare direttamente le tue necessità, come creare un nuovo sito',

  brewPhp7Issues: `Il repository ufficiale di Homebrew PHP mantiene solo le versioni più recenti. Se hai bisogno di una versione più vecchia come PHP 7.4, dovrai usare un repository di terze parti. Il programma installerà automaticamente per impostazione predefinita, ma a causa di problemi di rete e mancanza di mirror sources, l\'installazione potrebbe fallire. In questo caso, puoi installarlo manualmente con il comando:
brew tap shivammathur/php`,
  brewNetIssues: `Se non riesci ad ottenere la versione, probabilmente è un problema di rete. Il programma tenterà di usare automaticamente il repository di terze parti shivammathur/php per impostazione predefinita, e dato che non ci sono mirror sources in quel repository, l'installazione potrebbe bloccarsi. Ti consiglio di usare una VPN, ottenere il comando proxy dal terminale del software VPN, configurarlo in Impostazioni -> Impostazioni Proxy del software, e quindi abilitare il proxy. Prova di nuovo per vedere se riesci a ottenere e installare la versione.`,
  brewSlowIssues: `Se l'installazione delle versioni è molto lenta, probabilmente è un problema di rete. Puoi provare a cambiare i mirror di Homebrew e riprovare. Il modo più consigliato è usare una VPN. Ottieni il comando proxy dal terminale del software VPN, configurarlo in Impostazioni -> Impostazioni Proxy del software, quindi attiva il proxy. Ripeti per vedere se riesci ad ottenere e installare la versione.`,
  macportsNotInstall: `MacPorts non è stato rilevato nel sistema. Se desideri installarlo, clicca sul link sottostante
<a href="javascript:void();" onclick="openUrl('https://www.macports.org/install.php')">https://www.macports.org/install.php</a>
Segui la documentazione per installarlo.
Dopo l'installazione, puoi cambiare il mirror di MacPorts nelle impostazioni per migliorare la velocità di installazione del software.`,
  macportsHasInstall: `MacPorts è stato rilevato come installato nel sistema. Se non riesci ad installare il software o se l'installazione è lenta, prova a cambiare il mirror di MacPorts nelle impostazioni.`,
  brewNotInstall: `Homebrew non è stato rilevato nel tuo sistema. Se desideri installarlo, clicca sul link sottostante
<a href="javascript:void();" onclick="openUrl('https://www.macphpstudy.com/zh/help-4-2.html')">https://www.macphpstudy.com/zh/help-4-2.html</a>
Segui la documentazione per installarlo.`,
  brewHasInstall: `Homebrew è stato rilevato come installato nel sistema. Se hai problemi ad installare o disinstallare il software tramite l'applicazione, prova ad eseguire i comandi manualmente dalla linea di comando.`,
  mysqlPassword: `La password iniziale per l'account del database Mysql&MariaDB è root root.
Il programma non ha uno strumento di gestione dei dati del database. Se hai bisogno di cambiare la password o gestire i dati del database, puoi utilizzare uno dei seguenti strumenti:
phpMyAdmin <a href="javascript:void();" onclick="openUrl('https://www.phpmyadmin.net/')">https://www.phpmyadmin.net/</a>
Navicat <a href="javascript:void();" onclick="openUrl('https://www.navicat.com/')">https://www.navicat.com.cn/</a>
MySQL Workbench <a href="javascript:void();" onclick="openUrl('https://www.mysql.com/products/workbench/')">https://www.mysql.com/products/workbench/</a>
DataGrip <a href="javascript:void();" onclick="openUrl('https://www.jetbrains.com/datagrip/')">https://www.jetbrains.com/zh-cn/datagrip/</a>
DbGate <a href="javascript:void();" onclick="openUrl('https://dbgate.org/')">https://dbgate.org/</a>
DBeaver <a href="javascript:void();" onclick="openUrl('https://dbeaver.io/')">https://dbeaver.io/</a>
Se hai altri strumenti che consideri buoni, contattami per aggiungerli.`
}
