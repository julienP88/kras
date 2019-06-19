# Kras !!!

Das Projekt setzt sich dabei aus mehreren Modulen zusammen:
* **cras** - Dieses Projekt stellt ein responsives Angular Frontend bereit
* **[cras](https://github.com/jenszech/cras)** - stellt das benötigte Backend bereit
* Optional **[crasBadgeIt](https://github.com/jenszech/crasBadgeIt)** - Ein microcontroller projekt for small ePaper devices
* Optional **[crasAndroidViewer](https://github.com/jenszech/crasAndroidViewer)** - Eine Android App mit einem einfachem fullscreen Webviewer

## Features

* Gesamtübersicht aller Meetingräume und ihrer Ausstattung
* Tasgesdetail Ansicht eine Meetingraums

### Roadmap

* Spontane Schnellbuchung eines Raums
* Filtern/Suchen der Räume nach bestimmten Eigenschaften
* Bessere Raum Detailinformation (Telefon, etc.)
* Tagesübersicht über alle Räume hinweg
* Legende für die Eigenschaften
 
   
Für geplante Features und Änderungen siehe [CHANGELOG.md](CHANGELOG.md)
     
## Getting Started

Diese Anleitung zeigt anhand einer Beispiel Installation auf dem Raspberry wie die das Frontend installiert, eingerichtet und betrieben werden kann.

### Prerequisites

* Linux umgebung (z.B Raspberry Pi 3 mit Raspbian)
* git
* node.js

siehe: [Raspberry Setup](https://github.com/jenszech/cras/wiki/System-setup-on-Raspberry-Pi-example)

### Installation
#### Installation des KRAS Projekts
```
git clone https://github.com/julienP88/kras.git
cd kras
npm install
```

#### Installation eines Angular WebServers
```
sudo npm install -g angular-http-server
```

#### Einrichten als Hintergrundprocess
Einrichten als Process mit Autostart und start des http Server
```
sudo npm install pm2@latest -g
pm2 start angular-http-server --name crasFrontend -- -p 8080 --path release/kras/
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 list
```

### Betrieb
Das WebInterface: http://<YOUR IP>:8080

#### Server Status abfragen
```
pm2 list
```

#### Server neustarten
```
pm2 restart crasFrontend
```

#### Update der Projekt Software
```
cd kras
git pull
pm2 restart crasFrontend
```


## Run Angular
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Release

Run `ng release` to build the project with production setting. The build artifacts will be stored in the `release/` directory.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Built With

* [Node.js](https://nodejs.org)
* [PM2 Guideline](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04) für NodeJS Application auf Produktions Servern 
* [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jens Zech** - *Initial work* - [GitHub Profil](https://github.com/jenszech)
* **julienP88** - *Project Owner* - [GitHub Profil](https://github.com/julienP88)
* **Anna Utlik** - *Main contributor* - [GitHub Profil](https://github.com/anna-utlik)

See also the list of [contributors](https://github.com/julienP88/kras/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



##Weitere Infos:
[Wiki - Raspberry Setup](https://github.com/jenszech/cras/wiki/System-setup-on-Raspberry-Pi-example)
