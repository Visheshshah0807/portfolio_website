import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20" // Changed h-screen to min-h-screen to allow content to determine height
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 px-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          rerum ratione minus architecto illo laboriosam sed ullam veniam
          debitis iusto? Minima quibusdam et aperiam totam. Officia fuga error
          nihil. Voluptate, asperiores. Nostrum ipsum quod recusandae beatae
          repudiandae magni cum cupiditate alias repellat sit architecto
          laudantium libero voluptatem at ex, voluptatibus cumque. At velit
          quaerat sunt similique totam, quisquam necessitatibus culpa dolores
          fugit! Eius tempore sapiente sequi atque non adipisci quod natus
          reprehenderit, quos aperiam consequatur repudiandae architecto
          suscipit laborum dolor laboriosam doloremque quaerat iusto libero.
          Deleniti accusamus animi dicta natus aliquid ea, laboriosam corporis
          officiis. Obcaecati, illum. Harum, similique quia.
        </p>

        <br />

        <p className="text-xl px-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          blanditiis suscipit, repellendus eos, soluta assumenda magnam beatae
          minima reiciendis culpa libero iste fuga eligendi corrupti, distinctio
          optio vero velit quaerat. Sit debitis labore tempora. Tenetur,
          voluptatum voluptate autem nostrum sapiente consectetur praesentium
          veniam molestias, quas possimus eveniet! Eum, veniam expedita.
        </p>
      </div>
    </div>
  );
};

export default About;
