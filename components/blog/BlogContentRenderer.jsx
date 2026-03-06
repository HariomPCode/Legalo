import Image from "next/image";

export default function BlogContentRenderer({ content }) {
  return (
    <div className="prose prose-gray max-w-none">
      {content.map((block, i) => {
        if (block.type === "paragraph") {
          return <p key={i}>{block.text}</p>;
        }

        if (block.type === "heading") {
          const Tag = `h${block.level}`;
          return <Tag key={i}>{block.text}</Tag>;
        }

        if (block.type === "image") {
          return (
            <Image
              key={i}
              src={block.src}
              alt={block.alt}
              width={800}
              height={400}
              className="rounded-lg"
            />
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
}
