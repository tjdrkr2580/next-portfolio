import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const des = data.properties.설명.rich_text[0].plain_text;
  const tags = data.properties.태그.multi_select;
  return (
    <div className="bg-slate-400 p-6 m-3 rounded-md">
      <h1 className="mt-4 text-xl mb-2">{title}</h1>
      <h3 className="mb-2">{des}</h3>
      <a href={`${github}`} target="_blink">
        깃허브 바로가기
      </a>
      <div className="flex items-start mt-3">
        {tags.map((aTag) => (
          <h1
            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
            key={aTag.id}
          >
            {aTag.name}
          </h1>
        ))}
      </div>
    </div>
  );
}
