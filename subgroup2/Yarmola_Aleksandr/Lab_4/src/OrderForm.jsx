import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [restaurant, setRestaurant] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [portions, setPortions] = useState(1);
  const [comments, setComments] = useState('');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('delivery');

  // Данные о блюдах для каждого ресторана
  const restaurantDishes = {
    pizzaPalace: ['Маргарита', 'Пепперони', 'Четыре сыра'],
    sushiBar: ['Филадельфия', 'Калифорния', 'Спайси тунец'],
    asianWok: ['Курица с овощами', 'Пад тай', 'Том ям'],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      restaurant,
      cuisine,
      deliveryDate,
      portions,
      comments,
      selectedDishes,
      paymentMethod,
      deliveryOption,
    });
  };

  const handleDishChange = (e) => {
    const dish = e.target.value;
    if (dish && !selectedDishes.includes(dish)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const removeDish = (dishToRemove) => {
    setSelectedDishes(selectedDishes.filter((dish) => dish !== dishToRemove));
  };

  return (
    <div className="order-container">
      <h1>Заказ еды онлайн</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Выберите ресторан:</label>
          <select value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
            <option value="">-- Выберите --</option>
            <option value="pizzaPalace">Pizza Palace</option>
            <option value="sushiBar">Sushi Bar</option>
            <option value="asianWok">Asian Wok</option>
          </select>
        </div>

        <div className="form-group">
          <label>Тип кухни:</label>
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
            <option value="">-- Выберите --</option>
            <option value="italian">Итальянская</option>
            <option value="japanese">Японская</option>
            <option value="asian">Азиатская</option>
          </select>
        </div>

        <div className="form-group">
          <label>Дата и время доставки:</label>
          <input
            type="datetime-local"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Количество порций:</label>
          <input
            type="number"
            min="1"
            value={portions}
            onChange={(e) => setPortions(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Выберите блюда:</label>
          <select onChange={handleDishChange} value="">
            <option value="">-- Выберите блюдо --</option>
            {restaurant &&
              restaurantDishes[restaurant].map((dish) => (
                <option key={dish} value={dish}>
                  {dish}
                </option>
              ))}
          </select>
          <div className="selected-dishes">
            {selectedDishes.map((dish) => (
              <span key={dish} className="dish-tag">
                {dish} <button type="button" onClick={() => removeDish(dish)}>×</button>
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Способ оплаты:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">-- Выберите --</option>
            <option value="cash">Наличные</option>
            <option value="card">Картой</option>
            <option value="e-wallet">Электронный кошелёк</option>
          </select>
        </div>

        <div className="form-group">
          <label>Способ получения:</label>
          <select value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)}>
            <option value="delivery">Доставка</option>
            <option value="pickup">Самовывоз</option>
          </select>
        </div>

        <div className="form-group">
          <label>Комментарии:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Например, без лука"
          />
        </div>

        <button type="submit" className="submit-btn">Оформить заказ</button>
      </form>
    </div>
  );
};

export default OrderForm;