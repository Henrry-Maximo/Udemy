/*
  A function that receive four properties:
  - Method (GET-POST) / URL / SUCESS / ERROR 
*/
const request = obj => {
  const xhr = new XMLHttpRequest(); // Object native for do requests (old)

  // Open request (configuration): Method / URL / Async or Sync ()
  xhr.open(obj.method, obj.url, true);

  // Seeding data of user (POST)
  xhr.send(null); // null or white (GET)

  // Waiting the response of server for fired
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
      // Call function that the user passed
      obj.sucess(xhr.responseText); // Body how string
    } else {
      obj.error(xhr.statusText);

      // {
      //   code: xhr.status,
      //   msg: xhr.statusText
      // }
    }
  });
};

// Middleware for intercept click
document.addEventListener('click', (e) => {
  const el = e.target; // this is element click
  const tag = el.tagName.toLowerCase(); // get tag independent

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
})

function loadPage(el) {
  const href = el.getAttribute('href'); // Get value of link click
  console.log(href);

  const objConfig = {
    method: 'GET',
    url: href,

    sucess(response) {
      loadResult(response);
    },

    error(errorText) {
      console.error(errorText);
    }
  };

  // Think that this is your delivery man
  request(objConfig);

  // request({
  //   method: 'GET',
  //   url: href,
  //   sucess(response) {
  //     loadResult(response);
  //   },
  //   error(errorText) {
  //     console.error(errorText);
  //   }
  // });
}

// function for update content root
function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}