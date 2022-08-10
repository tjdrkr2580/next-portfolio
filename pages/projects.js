import Layout from "./../components/Layout";
import Title from "./../components/Title";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <>
      <Layout>
        <Title title="Project" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-full">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const dotenv = require("dotenv").config("../.env");
  const DATABASE_ID = process.env.NOTION_DATABASE_ID;
  const TOKEN = process.env.NOTION_TOKEN;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects },
  };
}
