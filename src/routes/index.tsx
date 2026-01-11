import {createFileRoute} from '@tanstack/react-router'
import HomeScreen from "@/pages/HomeScreen.tsx";

export const Route = createFileRoute('/')({
    component: HomeScreen,
})