// 'use client'
// export default function Overview() {
//     return (
//         <>
//             <div>Overview in admin page</div>
//         </>
//     )
// }
// export default Overview

import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('@/components/Nav'), {
    loading: () => <p>....Loading...</p>,
})

export default function Home() {
    return <DynamicHeader />
}