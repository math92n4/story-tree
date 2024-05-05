export default class Node {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.choices = null;
    }

    setChoices(choices) {
        this.choices = choices;
    }

}