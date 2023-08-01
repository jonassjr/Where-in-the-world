"use client"
import { CountryCard, Filter, SearchBar, SkeletonCountryCard } from '@/components'
import { CountryProps} from '@/types'
import { fetchCountries } from '@/utils'
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HomeProps {
  searchParams: {
    region: string;
  };
}

export default function Home({searchParams}: HomeProps) {

  const [allCountries, setAllCountries] = useState<CountryProps[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<CountryProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCountries(searchParams.region)
      .then((countries) => {
        setAllCountries(countries);
        setFilteredCountries(countries);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  }, [searchParams.region]);

  const handleSearch = (searchValue: string) => {
    const filtered = allCountries.filter((country: CountryProps) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  return (
    <main className="overflow-hidden bg-very-Light-gray dark:bg-very-dark-blue 
      ease-in-out duration-300 min-h-screen">
      <div className='mt-12 mb-4 padding-x padding-y max-width'>
        <div className='page__filters'>
          <SearchBar onSearch={handleSearch}/>
          <Filter countries={filteredCountries}/>
        </div>
        {loading ? (
          <section>
            <div className='grid xl:grid-cols-4 min-[1200px]:grid-cols-3 md:grid-cols-2 
              grid-cols-1 w-full gap-8 pt-14 place-items-center'>
                {Array.from({ length: 12}).map((_, index) => (
                  <SkeletonCountryCard key={index}/>
                ))}
            </div>
          </section>
        ) : error ? (
          <div className='padding-y'>
            <h2 className='text-center text-2xl'>{error}</h2>
          </div>
        ) : (
          <section>
            <div className='grid xl:grid-cols-4 min-[1200px]:grid-cols-3 md:grid-cols-2 
              grid-cols-1 w-full gap-8 pt-14 place-items-center'>
              {filteredCountries.map((country: CountryProps) => 
              <Link key={country.name.common} href={`/country/${country.cca3}`}>
                <CountryCard country={country}/>
              </Link>
              )}
            </div>
          </section>
        )}
               
      </div>
    </main>
  )
}
