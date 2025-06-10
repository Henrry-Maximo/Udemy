
// By default, is return a promise (get datas). The data doesn't come ready to use, is necessary a formatting
// URL (path) / Object (body)
fetch('page1.html').then((response) => {
  if (response.status !== 200) throw new Error('Erro 404'); // will go to block catch
  return response.text(); // <- return a promise, soo is necessary use other then for get the response
})
.then((html) => console.log(html))
.catch((e) => console.error(e));
