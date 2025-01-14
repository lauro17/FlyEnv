export default {
  MP_DATABASE:
    'Spécifiez le nom du fichier de la base de données locale pour stocker les données persistantes. La valeur par défaut est un fichier temporaire local qui est supprimé automatiquement lorsque Mailpit se ferme. Vous pouvez optionnellement utiliser une base de données distante rqlite en spécifiant une "adresse http" (voir la documentation).',
  MP_LABEL:
    'Définissez une étiquette optionnelle pour identifier cette instance de Mailpit. Cela ajoutera l’étiquette à l’interface web, aux serveurs SMTP et POP3.',
  MP_TENANT_ID:
    'Définissez un identifiant de locataire (préfixe de table). Cela permet d’isoler les données des autres instances de Mailpit partageant le même fichier de données (voir la documentation).',
  MP_MAX_MESSAGES:
    'Nombre maximal de messages à stocker. Mailpit supprimera périodiquement les messages les plus anciens si ce nombre est dépassé. Définissez sur 0 pour désactiver la suppression automatique (voir la documentation).',
  MP_MAX_AGE:
    'Âge maximal des messages à stocker, en heures (h) ou jours (d). Mailpit supprimera périodiquement les messages les plus anciens si ce nombre est dépassé. La valeur doit être en heures (ex: --max-age 36h) ou en jours (ex: --max-age 14d) (voir la documentation).',
  MP_USE_MESSAGE_DATES:
    'Utilisez la date d’en-tête du message comme date et heure de réception de Mailpit au lieu de la date et heure de réception SMTP.',
  MP_IGNORE_DUPLICATE_IDS: 'Ignorer les messages dupliqués en fonction des Message-Ids.',
  MP_LOG_FILE:
    'Consigner la sortie de Mailpit dans un fichier au lieu de stdout. Exemple : --log-file /chemin/vers/fichier.log',
  MP_QUIET: 'Journalisation silencieuse (erreurs uniquement)',
  MP_VERBOSE: 'Journalisation détaillée (debug)',
  MP_UI_BIND_ADDR: 'Interface et port de liaison HTTP pour l’UI.',
  MP_WEBROOT:
    'Définissez le webroot pour l’interface web et l’API, par exemple mail donnera http://0.0.0.0:8025/mail/.',
  MP_UI_AUTH_FILE:
    'Spécifiez un fichier de mot de passe pour l’authentification basique de l’interface web et de l’API (voir la documentation).',
  MP_UI_TLS_CERT:
    'Certificat TLS pour l’interface web et l’API (c’est-à-dire HTTPS). Cette option nécessite l’argument --ui-tls-key ou la variable d’environnement MP_UI_TLS_KEY.',
  MP_UI_TLS_KEY:
    'Clé TLS pour l’interface web et l’API (c’est-à-dire HTTPS). Cette option nécessite l’argument --ui-tls-cert ou la variable d’environnement MP_UI_TLS_CERT.',
  MP_API_CORS:
    'Définissez l’en-tête Access-Control-Allow-Origin CORS de l’API si vous avez besoin de requêtes inter-domaines dans le navigateur.',
  MP_BLOCK_REMOTE_CSS_AND_FONTS:
    'Bloquer l’accès au CSS distant et aux polices importées via les feuilles de style des messages. Mailpit utilise la méthode HTTP Content Security Policy (CSP) pour bloquer cela. Cela ne bloque pas les images distantes ni les liens externes.',
  MP_ENABLE_SPAMASSASSIN:
    'Activer l’intégration SpamAssassin pour le score de spam des messages (voir la documentation).',
  MP_ALLOW_UNTRUSTED_TLS:
    'Ne pas vérifier les certificats HTTPS pour le vérificateur de liens et la génération de captures d’écran.',
  MP_SMTP_BIND_ADDR: 'Interface et port de liaison SMTP.',
  MP_SMTP_AUTH_FILE:
    'Spécifiez un fichier de mot de passe pour l’authentification SMTP (voir la documentation).',
  MP_SMTP_AUTH_ACCEPT_ANY:
    'Accepter n’importe quel nom d’utilisateur et mot de passe SMTP, y compris aucun. Utilisez cette option pour autoriser pratiquement n’importe quoi.',
  MP_SMTP_TLS_CERT:
    'Certificat TLS pour SMTP STARTTLS. Cette option nécessite l’argument --smtp-tls-key ou la variable d’environnement MP_SMTP_TLS_KEY.',
  MP_SMTP_TLS_KEY:
    'Clé TLS pour SMTP STARTTLS. Cette option nécessite l’argument --smtp-tls-cert ou la variable d’environnement MP_SMTP_TLS_CERT.',
  MP_SMTP_REQUIRE_STARTTLS:
    'Exiger que tous les clients SMTP utilisent le cryptage STARTTLS. Si cette option est activée, seules les commandes NOOP, EHLO, STARTTLS et QUIT sont autorisées jusqu’à ce que la connexion soit mise à niveau vers STARTTLS.',
  MP_SMTP_REQUIRE_TLS:
    'Exiger que tous les clients SMTP utilisent le cryptage SSL/TLS. Si cette option est activée, toutes les connexions au serveur SMTP doivent être traitées via TLS. Cela diffère de STARTTLS, qui nécessite que la connexion initiale soit non cryptée. Notez que cette option désactive STARTTLS et peut réduire la compatibilité des clients.',
  MP_SMTP_AUTH_ALLOW_INSECURE:
    'Normalement, STARTTLS ou TLS est imposé pour toute authentification SMTP. Cette option permet une authentification SMTP PLAIN et LOGIN non sécurisée lors de l’utilisation de STARTTLS.',
  MP_SMTP_STRICT_RFC_HEADERS:
    'Obliger Mailpit à renvoyer une erreur SMTP si les en-têtes de message contiennent des sauts de ligne \\n au lieu de \\r\\n. Par défaut, Mailpit corrigera silencieusement les erreurs de saut de ligne générées par certains clients sendmail défectueux (voir le problème Github associé).',
  MP_SMTP_MAX_RECIPIENTS: 'Nombre maximum de destinataires SMTP autorisés par message.',
  MP_SMTP_ALLOWED_RECIPIENTS: `Autoriser uniquement les destinataires SMTP correspondant à une expression régulière. Utilisez cette option pour restreindre le courrier entrant à ceux envoyés uniquement à une liste pré-définie. Un exemple serait --smtp-allowed-recipients '{'@'example.com$' pour autoriser uniquement les e-mails envoyés à des destinataires se terminant par '@example.com'.`,
  MP_SMTP_DISABLE_RDNS:
    'Désactiver les recherches DNS inversées SMTP. Par défaut, SMTP tente de résoudre le nom d’hôte de l’adresse IP du client connectant, mais dans les réseaux de test, cela peut parfois poser des problèmes, provoquant des retards pour chaque message livré.',
  MP_SMTP_RELAY_CONFIG:
    'Fichier de configuration SMTP pour activer le relais/descriptif des messages (voir la documentation). Alternativement, toute la configuration peut être transmise via des variables d’environnement.',
  MP_SMTP_RELAY_ALL:
    'Relayer automatiquement tous les messages entrants via un serveur SMTP externe (voir la documentation). À utiliser avec une extrême prudence!',
  MP_SMTP_RELAY_MATCHING:
    'Relayer automatiquement certains messages entrants vers des destinataires correspondants via un serveur SMTP externe (voir la documentation).',
  MP_POP3_BIND_ADDR: 'Interface et port de liaison serveur POP3.',
  MP_POP3_AUTH_FILE:
    'Spécifiez un fichier de mot de passe pour l’authentification POP3 (voir la documentation).',
  MP_POP3_TLS_CERT:
    'Certificat TLS pour POP3 SSL/TLS. Cette option nécessite l’argument --pop3-tls-key ou la variable d’environnement MP_POP3_TLS_KEY.',
  MP_POP3_TLS_KEY:
    'Clé TLS pour POP3 SSL/TLS. Cette option nécessite l’argument --pop3-tls-cert ou la variable d’environnement MP_POP3_TLS_CERT.',
  MP_TAG: 'Auto-étiqueter les nouveaux messages correspondant aux filtres (voir la documentation).',
  MP_TAGS_CONFIG:
    'Charger les filtres d’étiquettes depuis un fichier de configuration YAML (voir la documentation).',
  MP_TAGS_TITLE_CASE:
    'Force la capitalisation des titres pour toutes les étiquettes nouvellement créées (voir la documentation).',
  MP_TAGS_DISABLE:
    'Désactiver l’étiquetage automatique spécifique. Cette option prend une liste séparée par des virgules d’options (voir la documentation).',
  MP_WEBHOOK_URL:
    'Appeler un webhook lorsqu’un nouveau message est reçu (voir la documentation), par exemple : --webhook-url https://exemple.com/webhook.php.',
  MP_WEBHOOK_LIMIT:
    'Limiter le nombre de requêtes webhook par seconde. Pour éviter de surcharger le serveur webhook, cette option est limitée à un maximum de 1 requête par seconde par défaut (voir la documentation).'
}
