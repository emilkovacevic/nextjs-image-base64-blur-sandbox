const SuspenceProducts = () => {
  return (
    <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 ">
      {Array.from({ length: 10 }, (_, index) => (
        <article
          key={index}
          className="animate-pulse h-40 max-w-[400] w-full bg-white shadow"
        />
      ))}
    </section>
  );
};

export default SuspenceProducts;
