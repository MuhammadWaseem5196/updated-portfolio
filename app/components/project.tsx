import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"


export default function Projects(){

  const resthouse = [{
    picture : "/pictures/Capture.JPG",
    report : "Tring to make facebook login page and successfuly completed",
    link : "https://facebook-login-page-emrufb5ih.vercel.app/",
    title : "Login",
    Sub : "Facebook "
  },
  {
    picture : "/pictures/Captured.JPG",
    report : "its a todo with some special features specially for moive ",
    link : "https://upgraded-todos-next-app.vercel.app/",
    title : "Todos",
    Sub : "Movies "
  }]

    return(
        <Card className="h-[85vh]">
          <CardHeader>
          <CardTitle className="text-3xl font-serif ">Projects</CardTitle>
            
          </CardHeader>
          
          <CardContent>
          <section className="flex">
          {resthouse.map((item , i)=>(<div className="lg:w-1/3 sm:w-1/2 p-4">
  <div className="flex relative">
    <img
      alt="gallery"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={item.picture}
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
        {item.Sub}
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        {item.title}
      </h1>
      <p className="leading-relaxed">
        {item.report}
        <a href={item.link} target="_blank" className="block">Visit</a>
      </p>
    </div>
  </div>
</div>
))}
          </section>
          </CardContent>    
                    
                    
        
        </Card>
    )
}