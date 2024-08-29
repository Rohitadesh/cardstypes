const Navbar = () =>{

    

    return(
        <div className="h-[28rem] w-[48rem] gap-12 rounded-md  flex justify-center items-center">
               
               {
                [{name:"HTML",color:"bg-sky-800",ballColor:"bg-yellow-200"},{name:"CSS",ballColor:"bg-red-500",color:"bg-orange-500"},{name:"JS",color:"bg-lime-900",ballColor:"bg-green-500"},{name:"GO",color:"bg-sky-600",ballColor:"bg-red-400"}].map((e)=>{

                    return(
                        <>
                <div className="h-[18rem]  pt-2  rounded-md w-36  pl-5 border border-black">
                    <div className=" h-[6rem] shadow-2xl w-[6rem] border shadow-md rounded-full  flex flex-col justify-center items-center">
                        <div className={`${e.color} h-[5rem] w-[5rem]  flex flex-col justify-center items-center   rounded-full `}>
                            <h1 className="text-xl text-white text-center  h-[4.5rem] shadow-2xl shadow-black w-[4.5rem] rounded-full flex justify-center items-center">{e.name}</h1>
                        </div>
                    </div>
                    <div className="h-[6rem] w-[6rem]  gap-[3px] pt-[4px] flex flex-col justify-start items-center">
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-black border rounded-full"></div>
                        <div className={`h-6 w-6 bg-yellow-200 border rounded-full ${e.ballColor}`}></div>
                    </div>
                </div>
                        </>
                    )
                })

               } 
            
        </div>
    )
}

export default Navbar;