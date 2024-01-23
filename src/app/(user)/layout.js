import Nav from "@/components/Nav"

export default function DashboardLayout({ children }) {
    return (
        <section>
            <Nav>
                {children}
            </Nav>
        </section>
    )
}