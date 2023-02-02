import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"

interface ProductProps {
    product: {
        id: string;
        name: string;
        price: string;
        imageUrl: string;
        description: string;
        defaultPriceId: string;
      }
}

export default function Product({ product }: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true);
            const response = await axios.post('api/checkout', {
                priceId: product.defaultPriceId,
                
            }, {
                baseURL: 'http://localhost:3000'
            })
            
            const { checkoutUrl } = response.data

            console.log(checkoutUrl)
            
            window.location.href = checkoutUrl
        } catch (error) {
            // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
            console.log(error);
            setIsCreatingCheckoutSession(false);
        }
        
    }


    return (
        <>
        <Head>
            <title>{product.name} | Ignite Shop</title>
        </Head>

        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} alt='' width={520} height={480}  />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>
                
                <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            {
                params: {
                    id: 'prod_NGvZrRoxLoQDyx'
                }    
            }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productId = params?.id as string;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                url: product.url,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency', 
                    currency: 'BRL'
                }).format((price.unit_amount || 0)/100),
                description: product.description,
                defaultPriceId: price.id,
                
              }
        },
        revalidate: 60 * 60 * 1, // 1 hour

    }
}