import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sandwich",
    description: "Chizzy and flooded with veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "A Restraurant specialty!",
    price: 25.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Brownie",
    description: "Sweet...and Tasty...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles.meals_list}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
