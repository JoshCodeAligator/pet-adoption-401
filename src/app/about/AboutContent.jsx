const AboutContent = () => {
    return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to <span className="text-green-600">PetPursuit</span></h2>
        <p className="text-gray-700 leading-relaxed">
          At <span className="text-green-600">PetPursuit</span>, we are passionate about connecting animals in need with loving families. Our mission is to rescue, rehome, and promote responsible pet ownership, ensuring every pet in our care finds a safe and nurturing environment.
        </p>
      </section>
  
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="text-green-600">{"PetPursuit's mission"}</span> is to rescue and rehome animals, promote responsible pet ownership, and raise awareness about animal welfare issues in our community. We strive to provide a safe and nurturing environment for every pet in our care.
        </p>
      </section>
  
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where every pet is valued, cherished, and provided with a loving home. <span className="text-green-600">PetPursuit</span> aspires to create a society that respects and protects the well-being of all animals, ensuring every pet has the opportunity to thrive.
        </p>
      </section>
  
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Adoption Categories</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Explore our adoption services for various types of pets:</p>
        <ul className="list-none pl-0 text-gray-700">
          <li>Dogs</li>
          <li>Cats</li>
          <li>Rabbits</li>
          <li>Exotics</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          {"Whether you're looking for a loyal companion, a playful feline friend, an adorable bunny, or an exotic pet to add excitement to your life, "}<span className="text-green-600">PetPursuit</span> has you covered.
        </p>
      </section>
    </div>
    )
}

export default AboutContent
