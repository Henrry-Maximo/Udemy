try {
  console.log(a);
  console.log('Open a file.');
  console.log('Manipulation the file and generator error.');
  console.log('Closeding the file.');

  try {
    console.log(a);
  } catch (e) {
    console.log('Error');
  } finally {
    console.log('Too i finally')
  }

} catch (e) {
  // Is execution when there is errors
  console.log('Tratament the error.')
} finally {
  console.log('FINALLY: I ever...');
}

// --------------------------------------------------------------------------------

function returnTime(data) {
  // check inverted
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.')
    // console.log('Not is.')
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeStirng('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    // not timezone
    hour12: false
  })
}

try {
  const date = new Date('01-01-1970 12:58:12')
  // returnTime(new Date());
  const time = returnTime(date);
  console.log(time)
} catch (e) {
  console.log(e);
  // here erros
} finally {
  console.log('Have a good day.');
}; 