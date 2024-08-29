import { useState } from 'react';
import Carousel from 'react-material-ui-carousel'

interface ICarouselItem {
    path: string,
    name: string,
    description: string,
}

interface ICarouselGroup {
    group: ICarouselItem[],
}

export function CarouselServices() {
    var paginas = [
        [
            {
                path: './public/assets/Servicos/Sourcing.jpg',
                name: "SOURCING",
                description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
            },
            {
                path: "./public/assets/Servicos/QualityControl.jpg",
                name: "QUALITY CONTROL",
                description: "We conduct rigorous quality inspections at various stages of production to maintain high standards and ensure the final products meet our clients' specifications."
            },
            {
                path: "./public/assets/Servicos/Manufacturing.jpg",
                name: "MANUFACTURING",
                description: "We help coordinate and manage the manufacturing process, working closely with trusted factories to ensure timely and efficient production."
            },
        ],
        [
            {
                path: './public/assets/Servicos/PrototypingSampling.jpg',
                name: "PROTOTYPING AND SAMPLING",
                description: "We support all the process from scratch till the final sample, we provide technical skills if needed, as technical design, patterns and print designs."
            },
            {
                path: "./public/assets/Servicos/Logistics.jpg",
                name: "LOGISTICS AND SHIPPING",
                description: "We oversee logistics and shipping arrangements to ensure timely delivery of finished goods to the desired destination."
            },
            {
                path: "./public/assets/Servicos/Compliance.jpg",
                name: "COMPLIANCE AND ETHICAL STANDARDS",
                description: "We ensure that all production processes adhere to industry regulations, ethical standards, and sustainability practices."
            },
        ],
        [
            {
                path: './public/assets/Servicos/CostNegotiation.jpg',
                name: "COST NEGOCIATION",
                description: "We leverage our relationships with suppliers and manufacturers to negotiate favourable pricing for materials and production services, helping our clients minimize costs."
            },
            {
                path: "./public/assets/Servicos/TrendForecasting.jpg",
                name: "TREND FORECASTING",
                description: "We provide insights into industry trends, market demands, and fashion forecasts to help our clients stay ahead in the competitive apparel and footwear market."
            },
            {
                path: './public/assets/Servicos/Sourcing.jpg',
                name: "SOURCING",
                description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
            }
        ]
    ]

    var paginasIndividuais = [
        {
            path: './public/assets/Servicos/Sourcing.jpg',
            name: "SOURCING",
            description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
        },
        {
            path: "./public/assets/Servicos/QualityControl.jpg",
            name: "QUALITY CONTROL",
            description: "We conduct rigorous quality inspections at various stages of production to maintain high standards and ensure the final products meet our clients' specifications."
        },
        {
            path: "./public/assets/Servicos/Manufacturing.jpg",
            name: "MANUFACTURING",
            description: "We help coordinate and manage the manufacturing process, working closely with trusted factories to ensure timely and efficient production."
        },
        {
            path: './public/assets/Servicos/PrototypingSampling.jpg',
            name: "PROTOTYPING AND SAMPLING",
            description: "We support all the process from scratch till the final sample, we provide technical skills if needed, as technical design, patterns and print designs."
        },
        {
            path: "./public/assets/Servicos/Logistics.jpg",
            name: "LOGISTICS AND SHIPPING",
            description: "We oversee logistics and shipping arrangements to ensure timely delivery of finished goods to the desired destination."
        },
        {
            path: "./public/assets/Servicos/Compliance.jpg",
            name: "COMPLIANCE AND ETHICAL STANDARDS",
            description: "We ensure that all production processes adhere to industry regulations, ethical standards, and sustainability practices."
        },
        {
            path: './public/assets/Servicos/CostNegotiation.jpg',
            name: "COST NEGOCIATION",
            description: "We leverage our relationships with suppliers and manufacturers to negotiate favourable pricing for materials and production services, helping our clients minimize costs."
        },
        {
            path: "./public/assets/Servicos/TrendForecasting.jpg",
            name: "TREND FORECASTING",
            description: "We provide insights into industry trends, market demands, and fashion forecasts to help our clients stay ahead in the competitive apparel and footwear market."
        },
        {
            path: './public/assets/Servicos/Sourcing.jpg',
            name: "SOURCING",
            description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
        }
    ]

    return (<>
        <Carousel
            indicators={false}
            animation='slide'
            className="hidden lg:flex flex-col align-middle justify-center                            
                       max-w-screen h-full
                       py-5">
            {
                paginas.map((item, i) =>
                    <Group key={i} group={item} />
                )
            }
        </Carousel>
        <Carousel
            indicators={false}
            animation='slide'
            className="flex flex-col lg:hidden align-middle justify-center                            
                   min-w-screen h-full
                   py-5">
            {
                paginasIndividuais.map((item) =>
                    <Item name={item.name} description={item.description} path={item.path}/>
                )
            }
        </Carousel>
    </>
    )
}

function Group(props: ICarouselGroup) {
    return (
        <>
            <div className='flex flex-row align-middle'>
                {
                    props.group.map((item, i) => <Item key={i} path={item.path} name={item.name} description={item.description} />)
                }
            </div>
        </>
    )
}


function Item(props: ICarouselItem) {
    const [isShown, setIsShown] = useState(true);
    return (
        <>
            <div onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
                className='flex flex-col justify-center items-center
                            h-96 w-full lg:w-1/3 
                            lg:mx-3                              
                            bg-center bg-origin-content bg-no-repeat bg-cover 
                            border-2 border-black'
                style={{
                    backgroundImage: `url(${props.path})`
                }}>
                {isShown ? (
                    <div className='mt-5 w-3/4 p-3 
                                    text-center text-xl poppins-bold 
                                    bg-white'>
                        {props.name}
                    </div>
                ) : (
                    <>
                        <div className='w-full h-full 
                                        p-3 
                                        text-center text-xl poppins-bold 
                                        bg-white/75 
                                        fade-in-options'>
                            {props.name}
                            <p className='poppins-regular text-justify p-12'>
                                {props.description}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

function OurServices() {
    return (
        <>
            <div className="w-screen  
                            flex flex-col 
                            px-5 py-5 lg:px-20 lg:py-10">
                <h2 className="anton-bold text-6xl">
                    SERVICES
                </h2>
                <CarouselServices />
            </div>
        </>
    )
}

export default OurServices
