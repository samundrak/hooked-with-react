import React from 'react';

const GithubLink = ({ repo, label, branch, file, render, ...rest }) => {
  const githubRepoUrl = repo || process.env.REACT_APP_GITHUB_REPO;
  const repoBranch = branch || 'master';
  const url = `${githubRepoUrl}/blob/${repoBranch}/${file}`;
  if (render) {
    return render({ url });
  }
  return (
    <a href={url} {...rest}>
      {label || 'Find in Github'}
    </a>
  );
};
export default GithubLink;
