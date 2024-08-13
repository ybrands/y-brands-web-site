import Carousel from 'react-material-ui-carousel'

interface ICarouselItem {
    path: string,
    name: string,
    description: string,
}

interface ICarouselGroup {
    group: ICarouselItem[],
}

export function CarouselPrincipal(props: any) {
    var items = [
        {
            path: './landing_photos/mulher01.jpg',
            name: "Teste",
            description: "Salão de Atendimento"
        },
        {
            path: "./landing_photos/mulher02.jpg",
            name: "Teste",
            description: "Sala de Depilação"
        },
    ]

    var paginas = [
        [
            {
                path: './landing_photos/mulher01.jpg',
                name: "Assunção Moreira",
                description: "PATTERN MAKER"
            },
            {
                path: "./landing_photos/mulher02.jpg",
                name: "Tatiana Cirja",
                description: "FASHION DESIGNER"
            },
            {
                path: "./landing_photos/mulher02.jpg",
                name: "Filipa Cipriano",
                description: "GRAPHIC DESIGNER"
            },
        ],
        [
            {
                path: './landing_photos/mulher01.jpg',
                name: "Joana Magalhães",
                description: "PRODUCTION AND LOGISTICS"
            },
            {
                path: "./landing_photos/mulher02.jpg",
                name: "Henrique Serqueira",
                description: "PRODUCTION"
            },
            {
                path: "./landing_photos/mulher02.jpg",
                name: "Francisco Costa e Silva",
                description: "FOOTWEAR ESPECIALIST"
            },
        ],
    ]

    return (
        <Carousel className="max-w-screen" indicators={false} animation='fade'>
            <div className='w-screen'>
                {
                    paginas.map((item, i) => 
                        <Group key={i} group={item}/>
                    )
                }   
            </div>
        </Carousel>
    )
}

function Group(props: ICarouselGroup) {
    return (
        <>
            <div className='flex flex-row justify-between'>
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
            <div className='flex flex-col w-1/3 justify-center'>
                <div className='w-28 h-28 rounded-full' style={{
                    backgroundImage: `url(${props.path})`
                }}></div>
                <div className=''>{props.name}</div>
                <div className=''>{props.description}</div>
            </div>      
        </>
    )
}

function OurTeam() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col px-20 py-10 ">
                <h3 className="text-lg poppins-light">About Us</h3><br />
                <h2 className="anton-bold text-6xl">
                    MEET OUR TEAM
                </h2>
                <CarouselPrincipal/>
            </div>
        </>
    )
}

export default OurTeam
