import React from "react";
import axios from "axios";

import Layout from "../components/Layout";
import { Repo } from "../interfaces";

type Props = {
  repos: Repo[];
};
const projects = ({ repos = [] }: Props) => {
  return (
    <Layout title="Projects | Next.js + TypeScript Example">
      <h1 className="title">Projects</h1>
      <section className="grid-two-column">
        {repos.map((repo) => (
          <div key={repo.id} className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{repo.name}</strong> <small>{repo.language}</small>
                    <br />
                    {repo.description || <em>No Description</em>}
                  </p>
                  <p>
                    <a
                      className="button"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on github
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://api.github.com/users/tomwilson89/repos"
  );

  data.sort(
    (a: any, b: any) => +new Date(b.updated_at) - +new Date(a.updated_at)
  );

  return {
    props: {
      repos: data.filter((repo: any) => !repo.fork).slice(0, 20),
    },
  };
}

export default projects;
