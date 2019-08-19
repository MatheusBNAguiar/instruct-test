export default function Api(root) {
  const buildRoute = path => `${root}/${path}`;

  const get = path => fetch(buildRoute(path))
    .then(response => response.json());

  return { get };
}
