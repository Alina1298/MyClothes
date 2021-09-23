const $formAddClothes = document.forms.formAddClothes;
const $addClothes = document.querySelector('#addClothes');

$addClothes.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.innerText === 'Добавить') {

    const data = Object.fromEntries(new FormData($formAddClothes))
    const response = await fetch('/clothes', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.ok) {
      $addClothes.innerText = 'Вещь добавлена в мою одежду';
    }
  }
});

