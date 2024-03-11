import { useEffect, useState } from "react"
import illustration from "../assets/illustration.svg"
import FormComponent from "../components/forms/FormComponent"
// import Footer from "../components/common/Footer";

function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const loadImage = async () => {
            await new Promise((resolve) => {
                const img = new Image()
                img.onload = () => resolve(img)
                img.src = illustration
            })
            setIsLoaded(true)
        }
        loadImage()
    }, [])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div
                    className="item-center w-full animate-up-down flex-col justify-center sm:w-1/2 sm:pl-4"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div className=" item-center w-[250px] justify-center sm:w-[400px]">
                        {isLoaded && (
                            <img
                                src={illustration}
                                alt="Code Connect Illustration"
                                className=""
                            />
                        )}
                    </div>
                    <FormComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage
