import Head from 'next/head';
import { useRef, useState } from 'react';
import { Button } from '../components/button';

export default function Home() {
  const [input, setInput] = useState("");
  const inputInput = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Thai Tone Accent Generator</title>
        <meta name="description" content="Generates Thai tone markers for transliteration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="mx-auto max-w-3xl">
          <h1 className="font-bold text-2xl py-8">Thai Accent Generator</h1>

          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Type the word you want to add a tone mark to.</p>
                <p>Click the tone buttons below to add a tone to the previous letter.</p>
              </div>

              <div className="w-full">
                <label htmlFor="transliteration" className="sr-only">
                  Transliteration
                </label>

                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  type="text"
                  name="transliteration"
                  id="transliteration"
                  className="mt-8 block rounded-md border py-2 px-4 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl w-full"
                  ref={inputInput}
                  autoFocus
                />
              </div>
            </div>
          </div>

          <div className="flex px-2 py-4 justify-between">
            <Button onClick={() => {
              setInput(addAccent(input, 772))
              inputInput.current && inputInput.current.focus();
            }}>
              Mid Tone
            </Button>

            <Button onClick={() => {
              setInput(addAccent(input, 768))
              inputInput.current && inputInput.current.focus();
            }}>
              Low Tone
            </Button>

            <Button onClick={() => {
              setInput(addAccent(input, 785))
              inputInput.current && inputInput.current.focus();
            }}>
              Falling Tone
            </Button>

            <Button onClick={() => {
              setInput(addAccent(input, 769))
              inputInput.current && inputInput.current.focus();
            }}>
              High Tone
            </Button>

            <Button onClick={() => {
              setInput(addAccent(input, 774))
              inputInput.current && inputInput.current.focus();
            }}>
              Rising Tone
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

const addAccent = (word: string, codePoint: number): string => {
  return word + String.fromCodePoint(codePoint);
}
