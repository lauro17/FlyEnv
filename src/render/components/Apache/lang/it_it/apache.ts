export default {
  timeout: `Numero di secondi prima che scada il tempo per l'invio e la ricezione.`,
  keep_alive: `Consentire o meno connessioni persistenti`,
  keep_alive_timeout: `Numero di secondi da attendere per la successiva richiesta dallo stesso client sulla stessa connessione.`,
  max_keep_alive_requests: `Numero massimo di richieste consentite durante una connessione persistente.\nImposta a 0 per consentire un numero illimitato.\nConsigliamo di mantenere questo numero alto per ottenere le migliori prestazioni.`,
  limit_request_body: `Byte. Limite di dimensione per il caricamento di file. 0: nessun limite`
}
