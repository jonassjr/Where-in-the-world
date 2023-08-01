"use client"
import { CountryDetails, SkeletonCountryPage } from "@/components"
import { CountryProps } from "@/types"
import { fetchCountryByCode } from "@/utils"
import { ArrowLeft } from "iconsax-react"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const Country = () => {

  const router = useRouter()

  const params = useParams()

  const code = params.countrycca3

  const handleBack = () => {
    router.back()
  }

  const [countryData, setcountryData] = useState<CountryProps[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(code) {
      fetchCountryByCode(code)
        .then((data) => {
          setcountryData(data)
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
          setError("Something went wrong. Please try again later.");
          setLoading(false);
        });
    }

  },[code])

  return (
    <main className="overflow-hidden bg-very-Light-gray dark:bg-very-dark-blue min-h-screen ease-in-out duration-300">
      <section>
        <div className='mt-12 mb-4 padding-x padding-y max-width'>
          <div className="mt-6">
            <button
            onClick={handleBack}
            className="bg-white dark:bg-dark-blue text-very-dark-blue-text dark:text-white px-5 h-[3rem] 
            rounded-md text-base shadow-md flex gap-x-2 items-center ease-in-out duration-300">
              <ArrowLeft size={22} variant="Broken" className="text-very-dark-blue-text dark:text-white ease-in-out duration-300"/>
              Back
            </button>
          </div>

          {loading ? (
            <SkeletonCountryPage />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            countryData && <CountryDetails country={countryData[0]} />
          )}

        </div>
      </section>
    </main>
  )

}

export default Country
