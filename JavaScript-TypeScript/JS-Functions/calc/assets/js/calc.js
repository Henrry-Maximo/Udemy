// factory function
function createCalc() {
  // ever that 
  return {
    // attributes
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    clearDisplay() {
      this.display.value = '';
    },

    // using method in object
    begin() {
      this.clickButtons();
      alert('Hello, welcome')
    },
    clickButtons() {
      document.addEventListener('click', function(e) {
        const el = e.target;
        console.log(this); // #document

        if (el.classList.contains('btn-num')) {
          this.btnForDisplay(el.innerText);
        }
      }.bind(this));
      // this -> function anonymous, is necessary bind
      // arrow function -> not change in ´this´

      document.addEventListener('click', (e) => {
        const el = e.target;
        console.log(this); // #document

        if (el.classList.contains('btn-num')) {
          this.btnForDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
      });
    },

    btnForDisplay(value) {
      this.display.value += value;
    },
  };
}

const calc = createCalc();
calc.begin();