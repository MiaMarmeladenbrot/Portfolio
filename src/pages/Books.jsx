import { Link } from "react-router-dom";
import { books } from "../assets/data/books";

const Books = () => {
  return (
    <main className="mt-32 mb-20 flex  flex-col gap-4 items-center md:px-20 px-10">
      <h2 className="border-brightColor border-b-2 inline-block pb-2 mb-5">
        My Books
      </h2>
      <p className="mb-10 max-w-6xl lg:text-center">
        In my former life, I was an editor for non-fiction literature and helped
        bring many great books into this world. My responsibility was to breathe
        life into the book: finding exciting stories and authors, identifying
        possible future trends, creating concepts for new books, negotiating
        contract details, setting up production and release timelines, editing
        and sometimes rewriting the text, designing maps and picture inlets,
        communicating and sometimes mediating between authors and the publishing
        house, and, and, and ...
      </p>
      <article className="flex justify-center gap-3 flex-wrap max-w-6xl">
        {books.map((item, index) => (
          <Link key={index} to={item.link} target="_blank">
            <img
              // # Höhe noch anpassen, dass alle gleich hoch
              className="w-36"
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
