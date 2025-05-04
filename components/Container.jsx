// components/Container.jsx
export default function Container({ children, homePage, articleComponent }) {
  return (
    <main className="max-w-6xl px-2 lg:mx-auto min-h-[calc(100vh-10rem)]">
      {children}
    </main>
  );
}
