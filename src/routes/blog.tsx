import {createFileRoute, redirect} from '@tanstack/react-router'
import {isOnMaintenance} from "@/config/appConfig.ts";
import BlogScreen from "@/pages/BlogScreen.tsx";

export const Route = createFileRoute('/blog')({
    beforeLoad: () => {
        if (isOnMaintenance) {
            throw redirect({
                to: "/maintenance",
            });
        }
    },
  component: BlogScreen,
})
