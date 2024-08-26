import React from 'react'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
    <main className='h-full flex justify-center items-center flex-col'>
        <div>chai and code with shadcn</div>
    
        <button className ='bg-blue-500 px-6 py-2 border rounded-md my-3 hover:bg-blue-900'>
            click
        </button>
    </main>
    )
}

export default Page
