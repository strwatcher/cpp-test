type CombineUrlParams = { resource: string; other?: string; base?: string };

export function combineUrl({ resource, other, base }: CombineUrlParams) {
  const baseUrl =
    base ?? import.meta.env.VITE_API_BASE_URL ?? "http://localhost/31299/";

  return `${baseUrl}${resource}${other ? `/${other}` : ""}`;
}
