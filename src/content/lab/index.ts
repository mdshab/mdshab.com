import type { LabProject } from "@/types/content";

import { labProjects } from "./lab";

export { labProjects };

export function getProject(id: string): LabProject | undefined {
  return labProjects.find((project) => project.id === id);
}
