document.querySelector('button').addEventListener('click', getQueen)

function getQueen(){
    const queen = document.querySelector('input').value
    const url = `/api/${queen}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#dragName').innerText = data.dragName
      document.querySelector('#age').innerText = data.age
      document.querySelector('#season1').innerText = data.seasons[0]
      document.querySelector('#outcome1').innerText = data.outcomes[0]
      document.querySelector('#season2').innerText = data.seasons[1]
      document.querySelector('#outcome2').innerText = data.outcomes[1]

      if (data.outcomes.includes('Winner')){
        document.querySelector('#crown').src = '/public/images/crown.png'
      }
      if (!data.outcomes.includes('Winner')){
        document.querySelector('#crown').src = ''
      }
    })
}


  
  