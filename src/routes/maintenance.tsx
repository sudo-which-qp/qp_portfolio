import { createFileRoute } from '@tanstack/react-router'
import WorkInProgress from "@/components/custom/WorkInProgress.tsx";

export const Route = createFileRoute('/maintenance')({
  component: WorkInProgress,
})