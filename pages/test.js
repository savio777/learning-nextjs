import Head from "next/head";

import Link from "next/link";

export default function Teste() {
  return (
    <div className="container">
      <Link href="/">
        <a>go back</a>
      </Link>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
