import React from "react";

const Projects = () => {
  return (
    <section id="products" className="flex justify-center">
      <div className="w-full max-w-screen-2xl">
        <h1 className="text-white font-semibold text-center text-6xl pt-10">
          המוצרים שלנו
        </h1>
        <p className="tracking-[0.6em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          ניתן להשיג בחנויות המובחרות
        </p>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* כדורי גבינה */}
            <div className="flex flex-col items-center">
              <img
                src="/כדורי גבינה.jpg"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">כדורי גבינה</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>

            {/* בלינצעס */}
            <div className="flex flex-col items-center">
              <img
                src="/בלינצעס.jpg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">בלינצעס</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>

            {/* רולדה */}
            <div className="flex flex-col items-center">
              <img
                src="/רולדה.jpg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">רולדה</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>

            {/* עוגה אפויה משובחת */}
            <div className="flex flex-col items-center">
              <img
                src="/עוגה אפויה משובחת.jpg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  עוגה אפויה משובחת
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>

            {/* עוגת שמנת פירורים */}
            <div className="flex flex-col items-center">
              <img
                src="/עוגת שמנת פירורים.jpg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  עוגת שמנת פירורים
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>

            {/* מיני רולדה */}
           
            <div className="flex flex-col items-center">
              <img
                src="/מיני רולדה.jpg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">מיני רולדה</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
