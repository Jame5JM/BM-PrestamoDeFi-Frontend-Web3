export default function AppLayout({children}){
    return (
      <>
        <Header/>
        <main>{children}</main>
        <Footer/>
     </>
    )
}