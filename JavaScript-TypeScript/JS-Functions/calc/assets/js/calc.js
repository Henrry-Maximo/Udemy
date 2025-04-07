// factory function
function createCalc() {
  // ever that 
  return {
    // attributes
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    
    // reference object key: this
    // using method in object
    begin() {
      this.clickButtons();
      this.pressEnter();
      alert('Hello, welcome')
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.makeCalculation();
        }
      });
    },

    makeCalculation() {
      let calculation = this.display.value;

      try {
        calculation = eval(calculation);
        // this.display.value;

        if (!calculation) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(calculation);
      } catch (e) {
        alert('Conta inválida.');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display
      .value.slice(0, -1)
    },

    clickButtons() {
      document.addEventListener('click', function(e) {
        const el = e.target;
        console.log(this); // #document

        if (el.classList.contains('btn-num')) {
          // Method within method
          this.btnForDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOne();
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