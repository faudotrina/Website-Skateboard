<h2 align="center">🛹 Conception d'un Site E-commerce de Skateboard</h2>

<p align="center">
  <img src="https://github.com/faudotrina/Website-Skateboard/blob/main/images/skate.jpg" alt="Skateboard E-Commerce Banner" />
</p>

<p>Bienvenue dans le dépôt GitHub de mon projet de site e-commerce de skateboard ! Ce document fournit des détails sur les composants du projet, ainsi que des instructions pour l'installation et l'exécution locales.</p>

<h2 align="center">🚀 Technologies Utilisées</h2>

<table align="center">
  <tr>
    <th>Backend</th>
    <th>Base de Données</th>
    <th>Frontend</th>
    <th>Gestion de Contenu</th>
  </tr>
  <tr>
    <td>Python, Django</td>
    <td>MySQL</td>
    <td>Next.js, Tailwind CSS</td>
    <td>Django Admin</td>
  </tr>
</table>

<h2 align="center">🛠️ Fonctionnalités Principales</h2>

<ul>
  <li><strong>Catalogue de Produits</strong> : Affichage des skateboards disponibles avec descriptions, prix et images.</li>
  <li><strong>Gestion des Utilisateurs</strong> : Inscription, connexion et gestion des profils utilisateurs.</li>
  <li><strong>Interface d'Administration</strong> : Gestion des produits, des utilisateurs et des commandes.</li>
</ul>

<h2 align="center">📥 Installation et Configuration</h2>

<p>Suivez les étapes ci-dessous pour installer et configurer le projet sur votre machine locale.</p>

<h3>Prérequis</h3>

<p>Assurez-vous d'avoir les outils suivants installés sur votre machine :</p>

<ul>
  <li><a href="https://www.python.org/downloads/">Python 3.x</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a> et <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a></li>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
</ul>

<h3>Étapes d'Installation</h3>

<ol>
  <li>
    <strong>Cloner le dépôt</strong> :
    <pre><code>git clone https://github.com/faudotrina/skateboard.git</code></pre>
    <pre><code>cd skateboard-ecommerce</code></pre>
  </li>
  <li>
    <strong>Configuration du Backend</strong> :
    <ul>
      <li>Créez un environnement virtuel et activez-le :
        <pre><code>python -m venv env</code></pre>
        <pre><code>source env/bin/activate  # Sur Windows: env\Scripts\activate</code></pre>
      </li>
      <li>Installez les dépendances Python :
        <pre><code>pip install -r requirements.txt</code></pre>
      </li>
      <li>Configurez la base de données MySQL et mettez à jour les informations de connexion dans <code>settings.py</code>.</li>
      <li>Appliquez les migrations :
        <pre><code>python manage.py migrate</code></pre>
      </li>
    </ul>
  </li>
  <li>
    <strong>Configuration du Frontend</strong> :
    <ul>
      <li>Accédez au répertoire frontend et installez les dépendances :
        <pre><code>cd frontend</code></pre>
        <pre><code>npm install</code></pre>
      </li>
      <li>Lancez le serveur de développement :
        <pre><code>npm run dev</code></pre>
      </li>
    </ul>
  </li>
  <li>
    <strong>Lancer le Serveur Backend</strong> :
    <pre><code>python manage.py runserver</code></pre>
  </li>
</ol>

<h2 align="center">📂 Arborescence du Projet</h2>

<p align="center">Voici la structure du projet :</p>

<pre>
skateboard-ecommerce/
├── backend/mysite
│   ├── manage.py
│   ├── myapp/
│   └── ...
├── frontend/mysite
│   ├── app/
│   ├── components/
│   ├── interfaces/
│   ├── publics/
│   ├── services/
│   └── ...
├── .gitignore
├── README.md
├── requirements.txt
└── ...
</pre>

<h2 align="center">🤝 Contribution</h2>

<p>Les contributions sont les bienvenues ! Pour signaler des bugs ou proposer des améliorations :</p>

<ul>
  <li><a href="https://github.com/faudotrina/skateboard/issues">Soumettez une issue</a></li>
  <li><a href="https://github.com/faudotrina/skateboard/pulls">Faites une pull request</a></li>
</ul>

<h2 align="center">👀 Aperçu</h2>
  <img src="https://github.com/faudotrina/Website-Skateboard/blob/main/images/home1.PNG"/>
  <img src="https://github.com/faudotrina/Website-Skateboard/blob/main/images/home.PNG"/>
  <img src="https://github.com/faudotrina/Website-Skateboard/blob/main/images/login.PNG"/>
  <img src="https://github.com/faudotrina/Website-Skateboard/blob/main/images/register.PNG"/>
