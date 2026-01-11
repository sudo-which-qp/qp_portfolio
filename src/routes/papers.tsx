import {createFileRoute, redirect} from '@tanstack/react-router'
import PaperScreen from "@/pages/PaperScreen.tsx";
import {isOnMaintenance} from "@/config/appConfig.ts";

export const Route = createFileRoute('/papers')({
  beforeLoad: () => {
    if (isOnMaintenance) {
      throw redirect({
        to: "/maintenance",
      });
    }
  },
  component: PaperScreen,
})