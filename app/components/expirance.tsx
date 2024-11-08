import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"


export default function Expirance(){

    const Expirance = [{
        company :"Shanfoods",
        position :"Admin Officer",
        rest : ["Building Maintainance","Gate Controling","Suervilance Managment","labour-Uniform ","Complaince"],
        from : "March-2018",
        To : "April-2022",
        Detail : "I was glad to say that I was worked with shanfoods its a good Company keep their workers happy giving them good envoirment ",
        
        
    },
    ]

    return(
        <Card data-aos="zoom-in" className="h-[85vh] overflow-y-scroll">
        <CardHeader>
          <CardTitle className="text-3xl font-serif ">Expirance</CardTitle>
          
        </CardHeader>
        
        <CardContent className="-mt-10">
        <section className="text-gray-600 body-font overflow-hidden">
<div className="container px-5 py-24 mx-auto">
  <div className="-my-8 divide-y-2 divide-gray-100">
    {Expirance.map((item , i)=>(<div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">
        {item.position}
        </span>
        <span className="mt-1 text-gray-500 text-sm">{`${item.from} - ${item.To}`}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {item.company}
        </h2>
        <p className="leading-relaxed">
          {item.Detail}
        
          </p>
          <ul className="list-disc pt-3 pl-4">
        { item.rest.map((one , i)=>(<li key={i}>{one}</li>) )}
        
    </ul>
      </div>
    </div>))}
    
  </div>
</div>

</section>


        </CardContent>          
                  
                  
      
      </Card>
    )
}