// 'use client'
import { Suspense } from "react";
import Loading from "./loading";
export default function DashboardLayout({ children }) {
    return (
        <section>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </section>
    )
}