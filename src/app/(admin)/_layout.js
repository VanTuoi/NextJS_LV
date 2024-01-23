// 'use client'

import { Suspense } from "react";
import Loading from "./_loading";

export const metadata = {
    title: 'Page admin'
}
console.log('pring....');
export default function DashboardLayout({ children }) {
    return (
        <section>
            <Suspense fallback={<p>loading.......</p>}>
                {children}
            </Suspense>
        </section>
    )
}