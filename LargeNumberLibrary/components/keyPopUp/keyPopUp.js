      import autocomplete from "../../script/lookupTables/autocomplete.js";

const keyPopUp = () => {
      console.log("keyPopUp.js loaded");

      document.addEventListener("DOMContentLoaded", function () {
        let auto1 = autocomplete();
        auto1.init("myInput1");

        let auto2 = autocomplete();
        auto2.init("myInput2");

        let auto3 = autocomplete();
        auto3.init("myInput3");

        let inputs = [
          document.getElementById("myInput1"),
          document.getElementById("myInput2"),
          document.getElementById("myInput3"),
          document.getElementById("pin"),
        ];
        let applyButton = document.getElementById("keyPopUp__apply");

        function checkInputs() {
          let allFilled = inputs.every((input) => input.value.trim() !== "");
          applyButton.disabled = !allFilled;
        }

        inputs.forEach((input) => {
          input.addEventListener("input", checkInputs);
        });

        // Initialize button state
        checkInputs();
      });
}
export default keyPopUp();