document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const pizzaName = document.querySelector('input[name="pizza"]:checked').value;
  const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(el => el.value);
  const size = document.querySelector('input[name="size"]:checked').value;

  let price = 0;
  if (size === "Маленькая") price = 350;
  else if (size === "Средняя") price = 500;
  else if (size === "Большая") price = 650;

  const order = {
    name: pizzaName,
    ingredients: ingredients,
    size: size,
    price: price
  };

  localStorage.setItem('pizzaOrder', JSON.stringify(order));

  window.location.href = "order.html";
});
