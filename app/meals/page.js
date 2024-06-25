import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/meal-1">meal 1</Link>
      </p>
    </>
  );
}
