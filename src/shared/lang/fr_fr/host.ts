export default {
  name: 'site',
  mark: 'marquer',
  setup: 'configuration',
  phpVersion: 'version PHP',
  newProject: 'Nouveau Projet',
  dir: 'Répertoire',
  frameWork: 'Framework',
  newProjectTips: `Création d'un nouveau projet avec Composer, initialisation avec le framework sélectionné, prend en charge : wordpress, laravel, yii2, symfony, thinkphp, codeIgniter, cakephp, slim`,
  toCreateHost: 'Créer un Hôte',
  dnsInfo:
    `Activez un serveur DNS. Résolvez le nom de domaine défini dans le fichier /etc/hosts vers l'IP locale. Principalement utilisé pour que d'autres ordinateurs ou téléphones sur le réseau local accèdent au site local. \n` +
    `Cette fonctionnalité nécessite Node.js, donc si vous ne l'avez pas installé, veuillez l'installer d'abord.\n` +
    `Comment l'utiliser.\n` +
    '1. Démarrez le serveur DNS.\n' +
    `2. Sur les autres ordinateurs ou téléphones, configurez le DNS du réseau, entrez l'IP du DNS affichée dans l'interface actuelle. Il est préférable de conserver uniquement cette configuration DNS et de la restaurer après son utilisation.\n` +
    '3. Utilisez cette commande pour tester : dig {ip} domaine\n' +
    '4. Sur les autres ordinateurs ou téléphones, utilisez le nom de domaine du site local pour y accéder.\n',
  staticSite: 'Site Statique',
  park: 'Générer des Sous-Sites',
  hostsCopy: 'Copier le texte des hôtes',
  hostsOpen: 'Ouvrir le fichier hosts personnalisé',

  placeholderName: `nom de l'hôte ex: www.xxx.com`,
  placeholderAlias: `alias de l'hôte ex: www.xxx.com`,
  placeholderRemarks: `remarques de l'hôte`,
  placeholderRootPath: `chemin racine de l'hôte`,
  hostPort: 'Port',
  hostSSL: 'SSL',

  parkConfim: 'Êtes-vous sûr de vouloir générer des sites à partir des sous-répertoires ?',

  autoSSL: 'Certificats SSL Automatiques',

  phpMyAdminInstallTips:
    'Aucun site phpMyAdmin trouvé avec le domaine phpmyadmin.phpwebstudy.test, télécharger phpMyAdmin et créer le site ?',
  phpMyAdminTaskRunning: 'Téléchargement de phpMyAdmin et création du site',

  warning: 'Avertissement',
  noPhpWarning: `Vérifiez qu'aucune version PHP n'est sélectionnée, un site statique sera créé et les fichiers PHP ne pourront pas être exécutés. Êtes-vous sûr de vouloir continuer ?`,

  enable: 'Activer',

  hostsWriteTips: 'Activer / Désactiver tous les hôtes dans cette liste',

  sort: 'Trier'
}
