import { api } from './api';

interface UserReposRequest {
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
}

export const getUserRepos = (username: string, request: UserReposRequest = {}) => {
  return api.get(`/users/${username}/repos`, {
    params: { ...request },
  });
};









