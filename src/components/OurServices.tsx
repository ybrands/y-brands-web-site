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
                path: './src/assets/Servicos/Sourcing.jpg',
                name: "SOURCING",
                description: "PATTERN MAKER"
            },
            {
                path: "./src/assets/Servicos/QualityControl.jpg",
                name: "QUALITY CONTROL",
                description: "FASHION DESIGNER"
            },
            {
                path: "./src/assets/Servicos/Manufacturing.jpg",
                name: "MANUFACTURING",
                description: "GRAPHIC DESIGNER"
            },
        ],
        [
            {
                path: './src/assets/Servicos/PrototypingSampling.jpg',
                name: "PROTOTYPING AND SAMPLING",
                description: "PRODUCTION AND LOGISTICS"
            },
            {
                path: "./src/assets/Servicos/Logistics.jpg",
                name: "LOGISTICS AND SHIPPING",
                description: "PRODUCTION"
            },
            {
                path: "./src/assets/Servicos/Compliance.jpg",
                name: "COMPLIANCE AND ETHICAL STANDARDS",
                description: "FOOTWEAR ESPECIALIST"
            },
        ],
        [
            {
                path: './src/assets/Servicos/CostNegotiation.jpg',
                name: "COST NEGOCIATION",
                description: "PRODUCTION AND LOGISTICS"
            },
            {
                path: "./src/assets/Servicos/TrendForecasting.jpg",
                name: "TREND FORECASTING",
                description: "PRODUCTION"
            },
        ]
    ]

    return (
        <Carousel className="flex flex-col py-5 max-w-screen h-full align-middle justify-center" indicators={false} animation='slide'>
            {
                paginas.map((item, i) =>
                    <Group key={i} group={item} />
                )
            }
        </Carousel>
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
    return (
        <>
            <div className='flex flex-col h-96 w-1/3 mx-3 justify-center items-center bg-center bg-origin-content bg-no-repeat bg-cover border-2 border-black' style={{
                    backgroundImage: `url(${props.path})`
                }}>
                <div className='mt-5 w-3/4 p-3 text-center text-xl poppins-bold bg-white'>{props.name}</div>
            </div>
        </>
    )
}

function OurServices() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col px-20 py-10 ">
                <h2 className="anton-bold text-6xl">
                    SERVICES
                </h2>
                <CarouselServices />
            </div>
        </>
    )
}

export default OurServices
