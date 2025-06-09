const request = obj => {
  const xhr = new XMLHttpRequest();

  // Method / URL / Async or Sync ()
  xhr.open(obj.method, obj.url, true);

  // Seeding data of user
  xhr.send(null); // null or white

  // xhr.onload = function () {}
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
      obj.sucess(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
      // {
      //   code: xhr.status,
      //   msg: xhr.statusText
      // }
    }
  });
};

document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
})

function loadPage(el) {
  const href = el.getAttribute('href');
  console.log(href);

  request({
    method: 'GET',
    url: href,
    sucess(response) {
      loadResult(response);
    },
    error(errorText) {
      console.error(errorText);
    }
  });
}

function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}