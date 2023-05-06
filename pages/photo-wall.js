// import Link from "next/link";
import Head from "next/head";
// import Script from "next/script";
import Layout from "../components/layout";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function PhotoWall() {
    return (
        <Layout>
            <Head>
                <title>小姑奶奶的照片墙</title>
            </Head>
            <div className="photo-wall">
                <h1>photos</h1>
                <div id="div2">
                    <div className={utilStyles.photoWall}>
                        <Image
                            priority
                            src="/images/1.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/2.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/3.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/4.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/5.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/6.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/7.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/8.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                        <Image
                            priority
                            src="/images/9.jpg"
                            className={utilStyles.photoWall}
                            height={400}
                            width={400}
                            alt="1"
                        />
                    </div>

                </div>

            </div>
        </Layout>
    );
}
