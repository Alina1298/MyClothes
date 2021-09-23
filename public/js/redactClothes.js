const $formAddClothes = document.forms.formAddClothes;

$formAddClothes.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.innerText === "Редактировать") {

    const data = Object.fromEntries(new FormData($formAddClothes));
    const response = await fetch('/clothes/redact/:id', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.ok) {
      window.location = '/'
    }
  }
})
