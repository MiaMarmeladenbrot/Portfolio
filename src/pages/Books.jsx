import { Link } from "react-router-dom";
import { books } from "../assets/data/books";

const Books = () => {
  return (
    <main className="mt-20 mb-20 flex flex-col gap-4 items-center">
      <h2 className="text-2xl border-brightColor border-b-2 inline-block pb-2 mb-5">
        Books
      </h2>
      <article className="flex gap-3 flex-wrap">
        {books.map((item, index) => (
          <Link key={index} to={item.link} target="_blank">
            <img
              // # Höhe noch anpassen, dass alle gleich hoch
              className="w-24"
              src={item.img}
              alt={`Cover of ${item.title}`}
            />
          </Link>
        ))}
      </article>
    </main>
  );
};

export default Books;
