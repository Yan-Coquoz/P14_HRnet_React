# P14_HRNet

- ![Author](<https://img.shields.io/badge/Author-Yan Coquoz-">)
- ![GitHub Starter-React-18-Redux size](<https://img.shields.io/github/repo-size/Yan-Coquoz/Starter-React-18-Redux>)  
![GitHub top language](https://img.shields.io/github/languages/top/Yan-Coquoz/Starter-React-18-Redux)
![GitHub language count](https://img.shields.io/github/languages/count/Yan-Coquoz/Starter-React-18-Redux)

Créer avec CRA (Create-React-App).

- Lancement de l'application

```bash
npm run start
# ou
npm start
# avec Yarn
yarn start
```

- Installations des packages à la suite du clonage.

```bash
# avec NPM
npm install
# avec Yarn
yarn
```

## Dépendances ajoutées

- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/react)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/prop-types)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/react-router-dom)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/redux)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/react-redux)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/@reduxjs/toolkit)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/dev/sass)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/dev/prettier)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/dev/eslint) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/dev/eslint-config-prettier) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/Starter-React-18-Redux/dev/eslint-plugin-react)

## Scripts ajoutés

En plus des scripts natif de CRA, il y a :

- `clean`     supprime les dossiers build, dist et docs.
- `clean:all` supprime les dossiers node modules et build, dist ainsi que le fichier package-lock.json.

---

### Besoins

- [ ] Convertir l'ensemble du projet HRNet en React.
- [ ] Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React que tu coderas toi-même, ou que tu peux importer depuis des libraires existantes si tu manques de temps.
- [ ] Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

- Tu devras faire une nouvelle version des pages "Create Employee" et "Employee List" avec React.
- Tu devras ajouter un système de gestion d'état (la version actuelle utilise un stockage local).
- Tu dois aussi t'assurer que tout est cohérent au niveau du style. Pour cela, tu n'es pas obligé de refaire le design de l'application, mais si tu veux changer le style pour quelque chose de plus moderne, tu es le bienvenu.  
- Si tu as le temps, tu peux tester le code React avec une suite de tests unitaires. Sinon, seuls des tests manuels sont nécessaires.

### issues

- [1ère issue DateTime](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1)
  - [Etude du plugins Jquery](https://github.com/xdan/datetimepicker)
- [2ème issue modale](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3)
  - [Etude du plugins Jquery](https://github.com/kylefox/jquery-modal)
- [3ème issue selecteur](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4)
  - [Etude du plugins Jquery](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
- [4ème issue tableau](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2)
  - [Etude du plugins Jquery](https://github.com/DataTables/DataTables)
