import { Button } from "@/components/ui/button"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./eduaction"
import Skills from "./skill"
import Expirance from "./expirance"
import Projects from "./project"

export function Detail() {
  return (
    <div className="h-full w-full bg-blue-50">
    <Tabs defaultValue="Education" className="w-full  p-4">
      <TabsList className="grid w-full -p-3 border-[2px] h-11 border-blue-600 grid-cols-4 bg-blue-200  font-serif font-extrabold ">
        <TabsTrigger value="Education" className="text-xl">Education</TabsTrigger>
        <TabsTrigger value="skills"className="text-xl">Skills</TabsTrigger>
        <TabsTrigger value="Expirance"className="text-xl">Expirance</TabsTrigger>
        <TabsTrigger value="projects"className="text-xl">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="Education" className="border-2 border-blue-700 rounded-lg">
        <Education/>
      </TabsContent>


      <TabsContent value="skills" className="border-2 border-blue-700 rounded-lg">
        <Skills/>
      </TabsContent>


      <TabsContent value="Expirance" className="border-2 border-blue-700 rounded-lg">
        <Expirance/>
      </TabsContent>


      <TabsContent value="projects" className="border-2 border-blue-700 rounded-lg">
        <Projects/>
      </TabsContent>
      
    </Tabs>
    </div>
  )
}
