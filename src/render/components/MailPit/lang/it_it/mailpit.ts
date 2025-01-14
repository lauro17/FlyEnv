export default {
  MP_DATABASE:
    'Specifica il nome del file del database locale per archiviare i dati persistenti. Il valore predefinito è un file temporaneo locale che viene eliminato automaticamente quando Mailpit si chiude. Puoi facoltativamente utilizzare un database remoto rqlite specificando un "indirizzo http" (vedi la documentazione).',
  MP_LABEL:
    'Definisci un’etichetta facoltativa per identificare questa istanza di Mailpit. Questo aggiungerà l’etichetta all’interfaccia web, ai server SMTP e POP3.',
  MP_TENANT_ID:
    'Definisci un identificatore di tenant (prefisso della tabella). Questo consente di isolare i dati di altre istanze di Mailpit che condividono lo stesso file di dati (vedi la documentazione).',
  MP_MAX_MESSAGES:
    'Numero massimo di messaggi da archiviare. Mailpit eliminerà periodicamente i messaggi più vecchi se questo numero viene superato. Imposta su 0 per disabilitare l’eliminazione automatica (vedi la documentazione).',
  MP_MAX_AGE:
    'Età massima dei messaggi da archiviare, in ore (h) o giorni (d). Mailpit eliminerà periodicamente i messaggi più vecchi se questa cifra viene superata. Il valore deve essere in ore (es: --max-age 36h) o giorni (es: --max-age 14d) (vedi la documentazione).',
  MP_USE_MESSAGE_DATES:
    'Usa la data dell’intestazione del messaggio come data e ora di ricezione di Mailpit invece della data e ora di ricezione SMTP.',
  MP_IGNORE_DUPLICATE_IDS: 'Ignora i messaggi duplicati in base agli ID dei messaggi.',
  MP_LOG_FILE:
    'Registra l’output di Mailpit su un file invece che su stdout. Esempio: --log-file /percorso/del/file.log',
  MP_QUIET: 'Registrazione silenziosa (solo errori)',
  MP_VERBOSE: 'Registrazione dettagliata (debug)',
  MP_UI_BIND_ADDR: 'Interfaccia e porta di binding HTTP per l’interfaccia utente.',
  MP_WEBROOT:
    'Definisci la radice web per l’interfaccia web e l’API, ad esempio mail darà http://0.0.0.0:8025/mail/.',
  MP_UI_AUTH_FILE:
    'Specifica un file di password per l’autenticazione di base per l’interfaccia web e l’API (vedi la documentazione).',
  MP_UI_TLS_CERT:
    'Certificato TLS per l’interfaccia web e l’API (ossia HTTPS). Questa opzione richiede l’argomento --ui-tls-key o la variabile d’ambiente MP_UI_TLS_KEY.',
  MP_UI_TLS_KEY:
    'Chiave TLS per l’interfaccia web e l’API (ossia HTTPS). Questa opzione richiede l’argomento --ui-tls-cert o la variabile d’ambiente MP_UI_TLS_CERT.',
  MP_API_CORS:
    'Definisci l’intestazione Access-Control-Allow-Origin CORS per l’API se hai bisogno di richieste cross-domain nel browser.',
  MP_BLOCK_REMOTE_CSS_AND_FONTS:
    'Blocca l’accesso al CSS remoto e ai font importati tramite i fogli di stile dei messaggi. Mailpit utilizza il metodo Content Security Policy (CSP) per bloccare questo. Questo non blocca le immagini remote o i link esterni.',
  MP_ENABLE_SPAMASSASSIN:
    'Abilita l’integrazione di SpamAssassin per il punteggio spam dei messaggi (vedi la documentazione).',
  MP_ALLOW_UNTRUSTED_TLS:
    'Non verificare i certificati HTTPS per il controllo dei link e la generazione degli screenshot.',
  MP_SMTP_BIND_ADDR: 'Interfaccia e porta di binding SMTP.',
  MP_SMTP_AUTH_FILE:
    'Specifica un file di password per l’autenticazione SMTP (vedi la documentazione).',
  MP_SMTP_AUTH_ACCEPT_ANY:
    'Accetta qualsiasi nome utente e password SMTP, inclusi quelli vuoti. Usa questa opzione per consentire praticamente qualsiasi cosa.',
  MP_SMTP_TLS_CERT:
    'Certificato TLS per SMTP STARTTLS. Questa opzione richiede l’argomento --smtp-tls-key o la variabile d’ambiente MP_SMTP_TLS_KEY.',
  MP_SMTP_TLS_KEY:
    'Chiave TLS per SMTP STARTTLS. Questa opzione richiede l’argomento --smtp-tls-cert o la variabile d’ambiente MP_SMTP_TLS_CERT.',
  MP_SMTP_REQUIRE_STARTTLS:
    'Richiedi che tutti i client SMTP utilizzino la crittografia STARTTLS. Se questa opzione è abilitata, verranno consentiti solo i comandi NOOP, EHLO, STARTTLS e QUIT fino a quando la connessione non sarà aggiornata a STARTTLS.',
  MP_SMTP_REQUIRE_TLS:
    'Richiedi che tutti i client SMTP utilizzino la crittografia SSL/TLS. Se questa opzione è abilitata, tutte le connessioni al server SMTP devono essere gestite tramite TLS. Questo è diverso da STARTTLS, che richiede che la connessione iniziale sia non criptata. Nota che questa opzione disabilita STARTTLS e potrebbe ridurre la compatibilità con i client.',
  MP_SMTP_AUTH_ALLOW_INSECURE:
    'Normalmente STARTTLS o TLS è obbligatorio per tutta l’autenticazione SMTP. Questa opzione consente l’autenticazione SMTP PLAIN e LOGIN non sicura durante l’uso di STARTTLS.',
  MP_SMTP_STRICT_RFC_HEADERS:
    'Costringi Mailpit a restituire un errore SMTP se le intestazioni del messaggio contengono linee di salto \\n anziché \\r\\n. Per impostazione predefinita, Mailpit correggerà silenziosamente gli errori di salto di linea generati da alcuni client sendmail difettosi (vedi il problema Github associato).',
  MP_SMTP_MAX_RECIPIENTS: 'Numero massimo di destinatari SMTP consentiti per messaggio.',
  MP_SMTP_ALLOWED_RECIPIENTS: `Consenti solo destinatari SMTP che corrispondono a una regex. Usa questa opzione per limitare la posta in arrivo a quella inviata solo a una lista predefinita. Un esempio sarebbe --smtp-allowed-recipients '{'@'example.com$' per consentire solo le e-mail inviate a destinatari che terminano con '@example.com'.`,
  MP_SMTP_DISABLE_RDNS:
    'Disabilita le ricerche DNS inverse SMTP. Per impostazione predefinita, SMTP cerca di risolvere il nome host dell’indirizzo IP del client che si connette, ma nelle reti di test questo può talvolta causare problemi, causando ritardi per ogni messaggio consegnato.',
  MP_SMTP_RELAY_CONFIG:
    'File di configurazione SMTP per abilitare il relay/descrizione dei messaggi (vedi la documentazione). In alternativa, tutta la configurazione può essere fornita tramite variabili d’ambiente.',
  MP_SMTP_RELAY_ALL:
    'Relai automaticamente tutti i messaggi in entrata tramite un server SMTP esterno (vedi la documentazione). Usalo con estrema cautela!',
  MP_SMTP_RELAY_MATCHING:
    'Relai automaticamente alcuni messaggi in entrata verso i destinatari corrispondenti tramite un server SMTP esterno (vedi la documentazione).',
  MP_POP3_BIND_ADDR: 'Interfaccia e porta di binding server POP3.',
  MP_POP3_AUTH_FILE:
    'Specifica un file di password per l’autenticazione POP3 (vedi la documentazione).',
  MP_POP3_TLS_CERT:
    'Certificato TLS per POP3 SSL/TLS. Questa opzione richiede l’argomento --pop3-tls-key o la variabile d’ambiente MP_POP3_TLS_KEY.',
  MP_POP3_TLS_KEY:
    'Chiave TLS per POP3 SSL/TLS. Questa opzione richiede l’argomento --pop3-tls-cert o la variabile d’ambiente MP_POP3_TLS_CERT.',
  MP_TAG: 'Auto-etichetta i nuovi messaggi che corrispondono ai filtri (vedi la documentazione).',
  MP_TAGS_CONFIG:
    'Carica i filtri delle etichette da un file di configurazione YAML (vedi la documentazione).',
  MP_TAGS_TITLE_CASE:
    'Forza la capitalizzazione dei titoli per tutte le etichette appena create (vedi la documentazione).',
  MP_TAGS_DISABLE:
    'Disabilita l’etichettatura automatica specifica. Questa opzione prende una lista separata da virgole di opzioni (vedi la documentazione).',
  MP_WEBHOOK_URL:
    'Chiama un webhook quando viene ricevuto un nuovo messaggio (vedi la documentazione), ad esempio: --webhook-url https://esempio.com/webhook.php.',
  MP_WEBHOOK_LIMIT:
    'Limita il numero di richieste webhook per secondo. Per evitare di sovraccaricare il server webhook, questa opzione è limitata a un massimo di 1 richiesta al secondo per impostazione predefinita (vedi la documentazione).'
}
