import { Helper } from './helper.js';
import { Localizations } from './localizations.js';
import { Templates } from './templates.js';

class App {

    constructor() {
        // Init Helper
        this.helper = new Helper();

        // Init Templates
        this.templates = new Templates();

        // Get browser language
        let browserLang = window.navigator.language.split("-")[0].toUpperCase();

        // Get language from custom cookie
        let cookieLang = this.helper.getCookie("current-lang");

        // Set current language: custom cookie wins over browser
        this.langCode = (cookieLang) ? cookieLang.toUpperCase() : browserLang;

        // Init localization
        this.localization = Localizations()[this.langCode];
    }

    init() {

        // Setup language list...
        this.setupLanguageList();

        // Get "Hello World" H1 element in current language
        let helloWorld = app.helper.createElementFromHtml(
            app.templates.helloWorld({})
        );

        //Insert H1 element into MAIN element
        document.querySelector("main").insertAdjacentElement("beforeend", helloWorld);
    }

    setupLanguageList() {

        // Get SELECT element
        let langSelect = document.querySelector("#languages");

        // Iterate over all defined languages in localization
        Object.keys(Localizations()).forEach(function(key, index) {

            //GET new OPTION element
            let langOption = app.helper.createElementFromHtml(
                app.templates.languagesListItem({
                    code: key,
                    name: Localizations()[key].languageName + " (" + key + ")"
                })
            );

            // Insert new OPTION to SELECT
            langSelect.insertAdjacentElement("beforeend", langOption)
        });

        // Set default language on SELECT
        langSelect.value = app.langCode;

        // Set trigger for language change on SELECT
        langSelect.onchange = function() {

            // Set selected language in custom cookie
            app.helper.setCookie("current-lang", langSelect.value);

            // Reload page
            window.location.reload();
        }
        
    }

}
export { App };