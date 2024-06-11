import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RepoProps } from "../types/repos";
import { getUserRepos } from "../services/endpointService";

const Projects = () => {
  const { username } = useParams<{ username: string }>();
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        // Example with sort by 'pushed'
        const res = await getUserRepos(username, { sort: 'pushed' });
        setRepos(res.data);
      } catch (error) {
        setError(true);
      }
    };

    loadRepos();
  }, [username]);

  if (error) {
    return <div>Repositório não encontrado</div>;
  }

  return (
    <div>
      <h2>Repositórios de {username}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
