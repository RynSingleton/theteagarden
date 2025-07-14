'use client'



function Garden({ className, ...props }: React.ComponentProps<"div">){
    return(
        <div className={className} {...props}>
            <div className='flex flex-col justify-center align-center bg-stone-800'>

            </div>
        </div>
    )
}

export {Garden};