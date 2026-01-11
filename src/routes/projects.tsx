import { createFileRoute } from '@tanstack/react-router'
import ProjectScreen from "@/pages/ProjectScreen.tsx";

export const Route = createFileRoute('/projects')({
  component: ProjectScreen,
})
