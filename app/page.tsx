export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Tradio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Tracking Algo Portfolio Performance
      </p>
      <p className="text-lg text-yellow-600 dark:text-yellow-400">
        In-Progress! Check back soon.
      </p>
      <p className="text-lg">
        <a href="https://shreyashg.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Visit shreyashg.com</a>
      </p>
    </div>
  );
}