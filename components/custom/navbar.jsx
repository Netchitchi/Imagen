import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Navbar(){

  return(
    <ClerkProvider> 
      <div className="flex flex-row justify-between">
        <h1 className="sm:text-sm lg:text-2xl cursor-pointer"> Imagen </h1> 
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: { width: "32px", height: "32px" },
              userButtonTrigger: { width: "32px", height: "32px" },
            },
          }}
        />
      </div>
    </ClerkProvider>
  )
}