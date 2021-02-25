class Templates {

    helloWorld(data) {
        return this.fillTemplate(`
            <h1>${app.localization.helloWorld}</h1>
        `, data);
    }

    languagesListItem(data) {
        return this.fillTemplate(`
            <option id="lang-${data.code}" 
                    value="${data.code}">
                ${data.name}
            </option> 
        `, data);
    }

    fillTemplate(templateString, templateVars){
        var func = new Function(...Object.keys(templateVars),  "return `" + templateString + "`;");
        return func(...Object.values(templateVars));
    }
}
export { Templates };