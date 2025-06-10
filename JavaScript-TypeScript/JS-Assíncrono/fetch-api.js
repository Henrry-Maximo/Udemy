// By default, is return a promise (get datas). The data doesn't come ready to use, is necessary a formatting
// URL (path) / Object (body)
fetch("page1.html")
  .then((response) => {
    if (response.status !== 200) throw new Error("Erro 404"); // will go to block catch
    return response.text(); // <- return a promise, soo is necessary use other then for get the response
  })
  .then((html) => console.log(html))
  .catch((e) => console.error(e));

// @ts-nocheck - "VS Code, senta e fica na tua. Hoje não, Faro."

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    xhr.send(null);
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

// Errors without treatment: uncaught - Use try catch ()
async function loadPage(el) {
  try {
    const href = el.getAttribute("href");

    const response = await fetch(href);
    if (response.status !== 200) throw new Error("Error 404");

    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.error(e);
  }
  // const objConfig = {
  //   method: "GET",
  //   url: href,
  // };

  // fetch(href)
  //   .then((response) => {
  //     if (response.status !== 200) throw new Error('Error 404');
  //     return response.text();
  //   })
  //   .then((html) => loadPage(html))
  //   .catch((e) => console.error(e)); // const response = request(objConfig);

  // loadResult(response);
}

function loadResult(response) {
  const result = document.querySelector(".result");
  result.innerHTML = response;
}
