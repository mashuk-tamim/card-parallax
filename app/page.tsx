import Image from "next/image";
import { projects } from "@/app/components/data"
import Card from "@/app/components/Card/page"

export default function Home() {
    console.log(projects);
    return <main className="mt-[50vh] mb-[100vh]">
        {
            projects.map((project, idx) => {
                return <Card key={idx} {...project}></Card>
            })
        }
    </main>;
}