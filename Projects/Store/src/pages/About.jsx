const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Nice to meet
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              You!
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Store is an Indian e-commerce company, headquartered
        in Bangalore, and incorporated in Singapore as a private limited
        company. The company initially focused on online book sales before
        expanding into other product categories such as consumer electronics,
        fashion, home essentials, groceries, and lifestyle products.
      </p>
    </>
  );
};
export default About;
