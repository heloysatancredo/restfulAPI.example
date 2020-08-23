//alert("Hello");

fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    data.forEach(function (each) {
      console.log(each.name)
      $('.sub-child2').append(`<img src="${each.flag}" height="42" width="42">`)
      $('.sub-child3').append(each.name + '  ')
    })
    console.log(JSON.stringify(data))
  })
  .catch((error) => {
    console.error(error.message)
  })
