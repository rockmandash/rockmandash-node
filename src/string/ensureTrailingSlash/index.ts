const ensureTrailingSlash = (path: string) =>
  path.endsWith('/') ? path : path + '/';

export default ensureTrailingSlash;
