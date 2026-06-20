const _autocomplete = () => {
  // private variables
  let el;
  let domId = "";
  let array = [];
  let recordedFirstLetter = "1";
  let currentFocus = 1;

  // public functions
  function _init(x) {
    this.domId = x;
    this.el = document.getElementById(this.domId);
    this.currentFocus = 1;
    this.listenIn();
    this.setKeyListener();
  }

  function _findValue(word) {
    console.log("findValue called with word: " + word);
    let firstLetter = word[0].toLowerCase();
    let file = "../lookupTables/englishDictionary/" + firstLetter + ".js";
    return import(file).then((obj) => {
      let array = obj.default.data;
      for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === word.toLowerCase()) {
          console.log("word | " + array[i] + ' found at position ' + i);
          return true;
        }
      }
      return false;
    });

  }


  function _listenIn(e) {
    this.el.addEventListener("keyup", this.keyed.bind(this));
    this.el.addEventListener("onChange", this.findValue.bind(this));
  }

  function _keyed(e) {
    if (this.recordedFirstLetter !== this.el.value[0]) {
      this.recordedFirstLetter = this.el.value[0];
      this.loadList();
    }

    if ((this.el.value.length > 1) && (e.keyCode !== 13)) {
      this.createSuggestionsDom();
    }
  }

  async function _loadList() {
    if (this.recordedFirstLetter) {
      let file =
        "../lookupTables/englishDictionary/" +
        this.recordedFirstLetter.toLowerCase() +
        ".js";
      let obj = await import(file);
      this.array = obj.default.data;
    }
  }

  function _createSuggestionsDom() {
    this.clearSuggestions();
    // create the list div
    let autocompleteList = document.createElement("DIV");
    autocompleteList.setAttribute("id", this.domId + "autocomplete-list");
    autocompleteList.setAttribute("class", "autocomplete-items");
    this.el.parentNode.appendChild(autocompleteList);

    let displayPlace = 0;
    if (this.currentFocus === 0) {
      this.currentFocus = 1;
    }
    for (let i = 0; i < this.array.length; i++) {
      if (
        this.array[i].substr(0, this.el.value.length).toUpperCase() ==
        this.el.value.toUpperCase()
      ) {
        displayPlace++;
        let item = document.createElement("DIV");
        if (this.currentFocus == displayPlace) { item.classList.add('selected') }
        item.innerHTML = "<strong>" + this.array[i].substr(0, this.el.value.length) + "</strong>";
        item.innerHTML += this.array[i].substr(this.el.value.length);
        item.innerHTML += "<input type='hidden' value='" + this.array[i] + " | " + i + "'>";
        // add click event to list item
        item.addEventListener("click", (e) => {
          this.el.value = e.target.getElementsByTagName("input")[0].value;
          this.clearSuggestions();
        });

        autocompleteList.appendChild(item);

      }
    }
  }

  function _clearSuggestions() {
    let x = document.getElementById(this.domId + "autocomplete-list");
    if (x) {
      x.remove();
    }
  }

  function _setKeyListener() {
    // keyboard navigation of the displayed suggestions
    this.el.addEventListener("keydown", (e) => {
      let x = document.getElementById(this.domId + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      switch (e.keyCode) {
        case 40: // down key
          this.currentFocus++;
          break;
        case 38: // up key
          this.currentFocus--;
          break;
        case 13: // enter key
          e.preventDefault();
          if (this.currentFocus > -1) {
            if (x) x[this.currentFocus - 1].click();
          }
          break;
        default: // all other keys
          this.currentFocus = 0;
          this.clearSuggestions();
          break;
      }

    });
  }


  return {
    init: _init,
    keyed: _keyed,
    listenIn: _listenIn,
    createSuggestionsDom: _createSuggestionsDom,
    loadList: _loadList,
    clearSuggestions: _clearSuggestions,
    setKeyListener: _setKeyListener,
    findValue: _findValue,
  };
};
export default _autocomplete;
