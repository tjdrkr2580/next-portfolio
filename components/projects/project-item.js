import Image from "next/image";

export default function ProjectItem({ data }) {
  console.log(data.c);
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const des = data.properties.설명.rich_text[0].plain_text;
  return (
    <div className="bg-slate-400 p-6 m-3 rounded-md">
      <h1 className="mt-4 text-xl">{title}</h1>
      <h3>{des}</h3>
      <a href={`${github}`} target="_blink">
        깃허브 바로가기
      </a>
    </div>
  );
}
