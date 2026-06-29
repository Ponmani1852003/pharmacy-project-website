import Blockquote from "./Blockquote.jsx";
import NumberedList from "./NumberedList.jsx";
import InfoCallout from "./InfoCallout.jsx";
import DataTable from "./DataTable.jsx";
import FeaturedArticle from "./FeaturedArticle.jsx";
import VideoThumbnail from "./VideoThumbnail.jsx";
import FrequentlyBoughtTogether from "../FrequentlyBoughtTogether/FrequentlyBoughtTogether.jsx";

const filler = `On the other hand, the start of ongoing work on shaping a position
provides a wide range of specialists with the chance to take part in shaping
progressive development directions. Ongoing practice shows that frameworks
and venues for staff training allow us to perform the important tasks
involved in developing the model.

Ongoing practice shows that consulting with a broad activist base requires
analysis of existing positions, while the participants involved in
established structures also represent an interesting experiment in testing
the relevant financial and administrative conditions. In the same way, the
emergence of a new organizational model allows us to evaluate the
significance of new proposals.`;

const numberedItems = [
  "On the other hand, the start of ongoing work on shaping a position provides a wide range of specialists with the chance to take part in shaping progressive development directions.",
  "Ongoing practice shows that consulting with a broad activist base requires analysis of existing positions, while complex organizational structures represent an interesting experiment in testing relevant conditions.",
  "In the same way, the emergence of a new organizational model allows us to evaluate the significance of new proposals. Ongoing practice shows clear evidence that various forms of activity development play an important role.",
  "It should not be forgotten, however, that further development of various forms of activity plays an important role in shaping the directions of progressive development.",
];

function Paragraph({ children }) {
  return (
    <>
      {children.split("\n\n").map((p, i) => (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {p}
        </p>
      ))}
    </>
  );
}

function ArticleBody() {
  return (
    <article className="space-y-8">
      <section>
        <Paragraph>{filler}</Paragraph>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Heading H2</h2>
        <Paragraph>{filler}</Paragraph>
      </section>

      <Blockquote>{filler.split("\n\n")[0]}</Blockquote>

      <Paragraph>{filler}</Paragraph>

      <FrequentlyBoughtTogether />

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Heading H3</h2>
        <Paragraph>{filler}</Paragraph>
        <NumberedList items={numberedItems} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Heading H4</h2>
        <Paragraph>{filler.split("\n\n")[0]}</Paragraph>
        <InfoCallout>{numberedItems[1]}</InfoCallout>
        <p className="text-gray-600 leading-relaxed mt-4">{filler.split("\n\n")[1]}</p>
      </section>

      <DataTable />

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Heading H5</h2>
        <Paragraph>{filler}</Paragraph>
      </section>

      <FeaturedArticle />

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Heading H6</h2>
        <p className="text-gray-600 leading-relaxed mb-6">{filler.split("\n\n")[0]}</p>
        <VideoThumbnail />
      </section>
    </article>
  );
}

export default ArticleBody;
