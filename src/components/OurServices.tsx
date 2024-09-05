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
                path: './assets/Servicos/Sourcing.jpg',
                name: "SOURCING",
                description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
            },
            {
                path: "./assets/Servicos/QualityControl.jpg",
                name: "QUALITY CONTROL",
                description: "We conduct rigorous quality inspections at various stages of production to maintain high standards and ensure the final products meet our clients' specifications."
            },
            {
                path: "./assets/Servicos/Manufacturing.jpg",
                name: "MANUFACTURING",
                description: "We help coordinate and manage the manufacturing process, working closely with trusted factories to ensure timely and efficient production."
            },
        ],
        [
            {
                path: './assets/Servicos/PrototypingSampling.jpg',
                name: "PROTOTYPING AND SAMPLING",
                description: "We support all the process from scratch till the final sample, we provide technical skills if needed, as technical design, patterns and print designs."
            },
            {
                path: "./assets/Servicos/Logistics.jpg",
                name: "LOGISTICS AND SHIPPING",
                description: "We oversee logistics and shipping arrangements to ensure timely delivery of finished goods to the desired destination."
            },
            {
                path: "./assets/Servicos/Compliance.jpg",
                name: "COMPLIANCE AND ETHICAL STANDARDS",
                description: "We ensure that all production processes adhere to industry regulations, ethical standards, and sustainability practices."
            },
        ],
        [
            {
                path: './assets/Servicos/CostNegotiation.jpg',
                name: "COST NEGOCIATION",
                description: "We leverage our relationships with suppliers and manufacturers to negotiate favourable pricing for materials and production services, helping our clients minimize costs."
            },
            {
                path: "./assets/Servicos/TrendForecasting.jpg",
                name: "TREND FORECASTING",
                description: "We provide insights into industry trends, market demands, and fashion forecasts to help our clients stay ahead in the competitive apparel and footwear market."
            },
            {
                path: './assets/Servicos/Sourcing.jpg',
                name: "SOURCING",
                description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
            }
        ]
    ]

    var paginasIndividuais = [
        {
            path: './assets/Servicos/Sourcing.jpg',
            name: "SOURCING",
            description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
        },
        {
            path: "./assets/Servicos/QualityControl.jpg",
            name: "QUALITY CONTROL",
            description: "We conduct rigorous quality inspections at various stages of production to maintain high standards and ensure the final products meet our clients' specifications."
        },
        {
            path: "./assets/Servicos/Manufacturing.jpg",
            name: "MANUFACTURING",
            description: "We help coordinate and manage the manufacturing process, working closely with trusted factories to ensure timely and efficient production."
        },
        {
            path: './assets/Servicos/PrototypingSampling.jpg',
            name: "PROTOTYPING AND SAMPLING",
            description: "We support all the process from scratch till the final sample, we provide technical skills if needed, as technical design, patterns and print designs."
        },
        {
            path: "./assets/Servicos/Logistics.jpg",
            name: "LOGISTICS AND SHIPPING",
            description: "We oversee logistics and shipping arrangements to ensure timely delivery of finished goods to the desired destination."
        },
        {
            path: "./assets/Servicos/Compliance.jpg",
            name: "COMPLIANCE AND ETHICAL STANDARDS",
            description: "We ensure that all production processes adhere to industry regulations, ethical standards, and sustainability practices."
        },
        {
            path: './assets/Servicos/CostNegotiation.jpg',
            name: "COST NEGOCIATION",
            description: "We leverage our relationships with suppliers and manufacturers to negotiate favourable pricing for materials and production services, helping our clients minimize costs."
        },
        {
            path: "./assets/Servicos/TrendForecasting.jpg",
            name: "TREND FORECASTING",
            description: "We provide insights into industry trends, market demands, and fashion forecasts to help our clients stay ahead in the competitive apparel and footwear market."
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
                            h-96 w-full
                            my-3 lg:my-0                                                         
                            bg-center bg-origin-content bg-no-repeat bg-cover 
                            border-2 border-black'
                style={{
                    backgroundImage: `url(${props.path})`
                }}>
                {isShown ? (
                    <div className='mt-5 w-3/4 p-2 
                                    text-center text-xl poppins-bold break-normal
                                    bg-white'>
                        {props.name}
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col justify-center items-center
                                        w-full h-full
                                        pt-10
                                        text-center text-xl lg:text-2xl poppins-bold 
                                        bg-white/75 
                                        fade-in-options'>
                            {props.name}
                            <p className='poppins-regular p-8 break-normal'>
                                {props.description}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

function OldServices() {
    return (
        <div id="OurServices"
                className="w-screen  
                        flex flex-col 
                        px-5 py-5 lg:px-20 lg:py-10">
            <h2 className="anton-bold text-6xl">
                SERVICES
            </h2>
            <CarouselServices />
        </div>
)
}

function OurServices() {
    var paginasIndividuais = [
        {
            path: './assets/Servicos/Sourcing.jpg',
            name: "SOURCING",
            description: "We assist in sourcing high-quality materials, fabrics, and components needed for apparel and footwear production."
        },
        {
            path: "./assets/Servicos/QualityControl.jpg",
            name: "QUALITY CONTROL",
            description: "We conduct rigorous quality inspections at various stages of production to maintain high standards and ensure the final products meet our clients' specifications."
        },
        {
            path: "./assets/Servicos/Manufacturing.jpg",
            name: "MANUFACTURING",
            description: "We help coordinate and manage the manufacturing process, working closely with trusted factories to ensure timely and efficient production."
        },
        {
            path: './assets/Servicos/PrototypingSampling.jpg',
            name: "PROTOTYPING AND SAMPLING",
            description: "We support all the process from scratch till the final sample, we provide technical skills if needed, as technical design, patterns and print designs."
        },
        {
            path: "./assets/Servicos/Logistics.jpg",
            name: "LOGISTICS AND SHIPPING",
            description: "We oversee logistics and shipping arrangements to ensure timely delivery of finished goods to the desired destination."
        },
        {
            path: "./assets/Servicos/Compliance.jpg",
            name: "COMPLIANCE AND ETHICAL STANDARDS",
            description: "We ensure that all production processes adhere to industry regulations, ethical standards, and sustainability practices."
        },
        {
            path: './assets/Servicos/CostNegotiation.jpg',
            name: "COST NEGOCIATION",
            description: "We leverage our relationships with suppliers and manufacturers to negotiate favourable pricing for materials and production services, helping our clients minimize costs."
        },
        {
            path: "./assets/Servicos/TrendForecasting.jpg",
            name: "TREND FORECASTING",
            description: "We provide insights into industry trends, market demands, and fashion forecasts to help our clients stay ahead in the competitive apparel and footwear market."
        }
    ]

    return (
        <>
            <div id="OurServices"
                 className="w-screen  
                            flex flex-col 
                            px-5 py-5 lg:px-20 lg:py-10">
                <h2 className="anton-bold text-6xl">
                    SERVICES
                </h2>
                <div className='flex flex-col justify-center items-center 
                                lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-5
                                my-5'>
                {
                    paginasIndividuais.map((item, i) => <Item key={i} path={item.path} name={item.name} description={item.description} />)
                }
                </div>
            </div>
        </>
    )
}

export default OurServices
