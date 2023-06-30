import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import HomePage from './components/Home'
// import ProductFeed from './components/ProductFeed'
import { GetServerSidePropsContext } from 'next';
// interface HomeProps {
//   const products: products[]; // Assuming Product is the type of the products array
// }

// export default function Home({ products }:HomeProps) {
export default function Home() {
  return (
    <div className="">
      <nav>
        <Link href="/">
          <HomePage />
        </Link>

        {/* <ProductFeed products /> */}
        
      </nav>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     }
//   }
// }
