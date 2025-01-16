export default {
  选择站点目录: 'Sélectionner le répertoire du site',
  选择文件夹: 'Sélectionner le dossier',

  错误类型: `Type d'erreur`,
  type403: `Une erreur 403 indique généralement un manque de permissions, que vous pouvez enquêter de la manière suivante:
  1. Vérifiez si le dossier appartient à l\'utilisateur, que ce soit l\'utilisateur actuel ou root. Si ce n\'est pas le cas, il est recommandé de changer le dossier.
  2. Vérifiez les permissions d\'exécution du dossier, si elles sont définies sur 755 ou 777. Le logiciel mettra automatiquement à jour les permissions à 755 lors de l\'ajout de sites, mais si le dossier se trouve dans des répertoires système, vous ne pourrez peut-être pas le changer. Il est conseillé de changer le dossier.
  3. Vérifiez les utilisateurs de démarrage du service, comme l\'utilisateur de démarrage nginx ou apache. La configuration par défaut du logiciel est correcte, mais si elle a été modifiée, essayez de revenir à la configuration par défaut.`,
  type404: `Une erreur 404 indique généralement que le fichier correspondant à la page n\'a pas été trouvé. Vous pouvez enquêter comme suit:
  1. Vérifiez si le fichier correspondant se trouve dans le répertoire du site, comme index.php ou index.html dans la racine.
  2. Vérifiez le fichier de configuration nginx ou apache, si le document par défaut a été modifié.
  3. Certains projets nécessitent une configuration pseudo-statique, comme ThinkPHP, Laravel, etc. Pour Apache, les fichiers pseudo-statiques sont généralement inclus dans le projet, et pour nginx, cette configuration doit être ajoutée lors de l\'ajout du site.`,
  type502: `Une erreur 50X indique généralement une erreur d\'exécution du projet ou un délai d\'attente. Si vous accédez via un domaine ou utilisez un VPN mondial, une erreur 502 peut se produire. Il est recommandé de désactiver le VPN mondial et d\'essayer à nouveau.`,

  任务已终止: 'Les tâches ont été annulées',
  当前有任务正在执行: `Il y a une tâche en cours, veuillez attendre qu'elle soit terminée.`,
  尚不能执行此任务:
    'Cette tâche ne peut pas être exécutée, veuillez en sélectionner une des tâches disponibles.',

  未发现可用版本: `Aucune version disponible trouvée, installez d'abord`,
  Apache服务启动成功: 'Le service Apache a démarré avec succès',
  服务启动失败端口占用: `Erreur de démarrage du service :
{err}
Motif de l\'erreur identifié : Occupation du port, essayez de terminer le processus qui occupe le port`,

  成功创建站点: 'Site créé avec succès',
  站点域名: 'Domaine du site',
  站点目录: 'Répertoire du site',
  尝试开启服务: 'Tentant de démarrer le service, veuillez patienter...',
  服务启动成功: 'Service démarré avec succès',
  域名: 'Domaine',
  已在浏览器中打开: 'Déjà ouvert dans votre navigateur, veuillez vérifier',
  服务启动失败: `Échec du démarrage du service, cause :
{err}
Veuillez essayer de démarrer le service manuellement`,

  MariaDB服务启动成功: 'Service MariaDB démarré avec succès',
  Memcached服务启动成功: 'Service Memcached démarré avec succès',
  Mysql服务启动成功: 'Service Mysql démarré avec succès',
  Nginx服务启动成功: 'Service Nginx démarré avec succès',
  Php服务启动成功: 'Service Php{num} démarré avec succès',

  尝试启动Apache服务: 'Tentant de démarrer le service Apache...',

  请输入或选择站点目录: 'Veuillez entrer ou sélectionner un répertoire de site',
  站点目录无效: 'Répertoire de site invalide, tâche annulée',
  请输入站点域名: 'Veuillez entrer le domaine du site, ex : www.test.com',
  域名无效: 'Domaine invalide, tâche annulée',
  创建站点中: 'Création du site en cours...',

  请查看日志: `Veuillez consulter le journal de {flag} et m'envoyer le message d'erreur.`,
  识别到端口占用: `Motif de l'erreur identifié : Occupation du port, essayez de terminer le processus qui occupe le port`,
  未识别到错误原因: `L'erreur n'a pas été identifiée, cela ne peut pas être traité pour le moment, veuillez attendre la mise à jour`,
  识别到Socket占用: `Motif de l'erreur identifié : Occupation du socket, essayez de terminer le processus qui occupe le socket.`,
  尝试启动Nginx服务: 'Tentant de démarrer le service Nginx...',
  站点错误码是否以下几种: `Le code d'erreur du site est-il l'un des suivants ?`,
  任务执行失败: `L\'exécution de la tâche a échoué en raison de :
 {err}`,

  我是pipi: `Bonjour, je suis pipi. Comment puis-je vous aider ?`,
  你的要求: 'Vous pouvez taper directement vos besoins, comme créer un nouveau site',

  brewPhp7Issues: `Le dépôt officiel de Homebrew PHP ne maintient que les versions les plus récentes. Si vous avez besoin d\'une version antérieure comme PHP 7.4, vous devrez utiliser un dépôt tiers. Le programme l\'installera automatiquement par défaut, mais en raison de problèmes de réseau et de manque de sources miroir, l\'installation peut échouer. Dans ce cas, vous pouvez l\'installer manuellement avec la commande :
brew tap shivammathur/php`,
  brewNetIssues: `Si vous ne parvenez pas à obtenir la version, c\'est probablement un problème de réseau. Le programme tentera d\'utiliser par défaut le dépôt tiers shivammathur/php, et comme il n\'y a pas de sources miroir dans ce dépôt, l\'installation peut se bloquer. Il est recommandé d\'utiliser un VPN, obtenir la commande proxy du terminal du logiciel VPN, le configurer dans Paramètres -> Paramètres Proxy du logiciel, puis activer le proxy. Essayez à nouveau pour voir si vous pouvez obtenir et installer la version.`,
  brewSlowIssues: `Si l\'installation des versions est très lente, il s\'agit probablement d\'un problème de réseau. Vous pouvez essayer de changer les miroirs de Homebrew et réessayer. La méthode la plus recommandée consiste à utiliser un VPN. Obtenez la commande proxy du terminal du logiciel VPN, configurez-le dans Paramètres -> Paramètres Proxy du logiciel, puis activez le proxy. Réessayez pour voir si vous pouvez obtenir et installer la version.`,
  macportsNotInstall: `MacPorts n\'a pas été détecté sur le système. Si vous souhaitez l\'installer, cliquez sur le lien ci-dessous
<a href="javascript:void();" onclick="openUrl('https://www.macports.org/install.php')">https://www.macports.org/install.php</a>
Suivez la documentation pour l\'installer.
Après l\'installation, vous pouvez changer le miroir de MacPorts dans les paramètres pour améliorer la vitesse d\'installation du logiciel.`,
  macportsHasInstall: `MacPorts a été détecté comme installé sur le système. Si vous ne pouvez pas installer le logiciel ou si l\'installation est lente, essayez de changer le miroir de MacPorts dans les paramètres.`,
  brewNotInstall: `Homebrew n\'a pas été détecté sur votre système. Si vous souhaitez l\'installer, cliquez sur le lien ci-dessous
<a href="javascript:void();" onclick="openUrl('https://www.macphpstudy.com/zh/help-4-2.html')">https://www.macphpstudy.com/zh/help-4-2.html</a>
Suivez la documentation pour l\'installer.`,
  brewHasInstall: `Homebrew a été détecté comme installé sur le système. Si vous rencontrez des problèmes pour installer ou désinstaller le logiciel via l\'application, essayez d\'exécuter les commandes manuellement à partir de la ligne de commande.`,
  mysqlPassword: `Le mot de passe initial pour le compte de base de données Mysql&MariaDB est root root.
Le programme ne possède pas d\'outil de gestion des données de base de données. Si vous devez modifier le mot de passe ou gérer les données de la base de données, vous pouvez utiliser l\'un des outils suivants :
phpMyAdmin <a href="javascript:void();" onclick="openUrl('https://www.phpmyadmin.net/')">https://www.phpmyadmin.net/</a>
Navicat <a href="javascript:void();" onclick="openUrl('https://www.navicat.com/')">https://www.navicat.com.cn/</a>
MySQL Workbench <a href="javascript:void();" onclick="openUrl('https://www.mysql.com/products/workbench/')">https://www.mysql.com/products/workbench/</a>
DataGrip <a href="javascript:void();" onclick="openUrl('https://www.jetbrains.com/datagrip/')">https://www.jetbrains.com/zh-cn/datagrip/</a>
DbGate <a href="javascript:void();" onclick="openUrl('https://dbgate.org/')">https://dbgate.org/</a>
DBeaver <a href="javascript:void();" onclick="openUrl('https://dbeaver.io/')">https://dbeaver.io/</a>
Si vous avez d\'autres outils que vous trouvez bons, contactez-moi pour les ajouter.`
}
