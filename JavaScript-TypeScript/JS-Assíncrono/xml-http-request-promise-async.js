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

async function loadPage(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(objConfig);
    loadResult(response);
  } catch (e) {
    console.error(e);
  }
}

function loadResult(response) {
  const result = document.querySelector(".result");
  result.innerHTML = response;
}
