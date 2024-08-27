import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'

interface ICarouselItem {
    path: string,
    name: string,
    description: string,
}

interface ICarouselGroup {
    group: ICarouselItem[],
}

export function CarouselEquipa() {
    const paginas = [
        [
            {
                path: './src/assets/IntegrantesEquipa/AssuncaoMoreiraPhoto.jpg',
                name: "Assunção Moreira",
                description: "PATTERN MAKER"
            },
            {
                path: "./src/assets/IntegrantesEquipa/TatianaCirjaPhoto.jpg",
                name: "Tatiana Cirja",
                description: "FASHION DESIGNER"
            },
            {
                path: "./src/assets/IntegrantesEquipa/FilipaCiprianoPhoto.jpg",
                name: "Filipa Cipriano",
                description: "GRAPHIC DESIGNER"
            },
        ],
        [
            {
                path: './src/assets/IntegrantesEquipa/JoanaMagallhaesPhoto.jpg',
                name: "Joana Magalhães",
                description: "PRODUCTION AND LOGISTICS"
            },
            {
                path: "./src/assets/IntegrantesEquipa/HenriqueCerqueiraPhoto.jpg",
                name: "Henrique Serqueira",
                description: "PRODUCTION"
            },
            {
                path: "./src/assets/IntegrantesEquipa/FranciscoPhoto.jpg",
                name: "Francisco Costa e Silva",
                description: "FOOTWEAR ESPECIALIST"
            },
        ],
    ];

    const paginasIndividuais = [
        {
            path: './src/assets/IntegrantesEquipa/AssuncaoMoreiraPhoto.jpg',
            name: "Assunção Moreira",
            description: "PATTERN MAKER"
        },
        {
            path: "./src/assets/IntegrantesEquipa/TatianaCirjaPhoto.jpg",
            name: "Tatiana Cirja",
            description: "FASHION DESIGNER"
        },
        {
            path: "./src/assets/IntegrantesEquipa/FilipaCiprianoPhoto.jpg",
            name: "Filipa Cipriano",
            description: "GRAPHIC DESIGNER"
        },
        {
            path: './src/assets/IntegrantesEquipa/JoanaMagallhaesPhoto.jpg',
            name: "Joana Magalhães",
            description: "PRODUCTION AND LOGISTICS"
        },
        {
            path: "./src/assets/IntegrantesEquipa/HenriqueCerqueiraPhoto.jpg",
            name: "Henrique Serqueira",
            description: "PRODUCTION"
        },
        {
            path: "./src/assets/IntegrantesEquipa/FranciscoPhoto.jpg",
            name: "Francisco Costa e Silva",
            description: "FOOTWEAR ESPECIALIST"
        },
    ];

    return (
        <>
            <Carousel className="hidden sm:flex flex-col py-5 max-w-screen h-full align-middle justify-center" indicators={false} animation='slide'>
                {
                    paginas.map((item, i) =>
                        <Group key={i} group={item} />
                    )
                }
            </Carousel>
            <Carousel navButtonsAlwaysVisible className="sm:hidden flex flex-col py-5 min-w-screen align-middle justify-center" indicators={false} animation='slide'>
                {
                    paginasIndividuais.map((item, i) =>
                        <Item key={i} name={item.name} description={item.description} path={item.path}/>
                    )
                }
            </Carousel>
        </>
    )
}

function Group(props: ICarouselGroup) {
    return (
        <>
            <div className='flex flex-row w-full align-middle'>
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
            <div className='flex flex-col sm:h-full w-full sm:w-1/3 items-center '>
                <div className='w-44 h-44 rounded-full bg-center bg-origin-content bg-no-repeat bg-cover' style={{
                    backgroundImage: `url(${props.path})`
                }}></div>
                <div className='mt-5 text-center text-2xl poppins-bold'>{props.name}</div>
                <div className='text-center text-sm poppins-light'>{props.description}</div>
            </div>
        </>
    )
}

function OurTeam() {
    return (
        <>
            <div className="w-screen sm:h-screen flex flex-col px-5 py-5 sm:px-20 sm:py-10 ">
                <h3 className="text-lg poppins-light">About Us</h3><br />
                <h2 className="anton-bold text-6xl">
                    MEET OUR TEAM
                </h2>
                <CarouselEquipa />
            </div>
        </>
    )
}

export default OurTeam
