import Head from 'next/head'
import React, { FC } from 'react'

interface BlankLayoutProps {
    title: string
    description?: string
    children: React.ReactNode
}

const Blank: FC<BlankLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>

                {description && (
                    <meta
                        name='description'
                        content={description}
                    />
                )}
            </Head>

            {children}
        </>
    )
}

export default Blank
