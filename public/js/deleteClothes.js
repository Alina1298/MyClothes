const $postWrapper = document.querySelector('[data-postwrapper]')

$postWrapper.addEventListener('click', async (event) => {
  if (event.target.innerText === 'Удалить') {
    const id = event.target.closest('[data-postid]').dataset.postid;
    const response = await fetch('/clothes/my', {
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })

    if (response.ok) {
      event.target.closest('[data-postid]').remove();
    }
  }
  if (event.target.innerText === 'Редактировать') {
    const id = event.target.closest('[data-postid]').dataset.postid;
    const response = await fetch('/clothes/redact', {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    if (response.ok) {
      document.location.href = "http://www.localhost:3000/clothes/redact";
    }
  }
})
