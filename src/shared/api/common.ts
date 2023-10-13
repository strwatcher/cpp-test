type CombineUrlParams = { resource: string; other?: string; base?: string };

export function combineUrl({ resource, other, base }: CombineUrlParams) {
  return `${base ?? import.meta.env.VITE_API_BASE_URL}${resource}${other ? `/${other}` : ""
    }`;
}
