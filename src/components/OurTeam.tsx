import Carousel from 'react-material-ui-carousel'

/**
 * Interface ICarouselItem para definição das Propriedades Básicas do Item do Carousel de Serviços.
 *
 * @interface ICarouselItem
 */
interface ICarouselItem {
    /* Caminho da Imagem. */
    path: string,
    /* Nome do Serviço. */
    name: string,
    /* Descrição do Serviço. */
    description: string,
}

/**
 * Interface ICarouselGroup a qual define o grupo de itens que será exibido em cada parte do carousel.
 *
 * @interface ICarouselGroup
 */
interface ICarouselGroup {
    /* Lista de Itens. */
    group: ICarouselItem[],
}

export function CarouselEquipa() {
    const paginas = [
        [
            {
                path: './assets/IntegrantesEquipa/AssuncaoMoreiraPhoto.jpg',
                name: "Assunção Moreira",
                description: "PATTERN MAKER"
            },
            {
                path: "./assets/IntegrantesEquipa/TatianaCirjaPhoto.jpg",
                name: "Tatiana Cirja",
                description: "FASHION DESIGNER"
            },
            {
                path: "./assets/IntegrantesEquipa/FilipaCiprianoPhoto.jpg",
                name: "Filipa Cipriano",
                description: "GRAPHIC DESIGNER"
            },
        ],
        [
            {
                path: './assets/IntegrantesEquipa/JoanaMagallhaesPhoto.jpg',
                name: "Joana Magalhães",
                description: "PRODUCTION AND LOGISTICS"
            },
            {
                path: "./assets/IntegrantesEquipa/HenriqueCerqueiraPhoto.jpg",
                name: "Henrique Serqueira",
                description: "PRODUCTION"
            },
            {
                path: "./assets/IntegrantesEquipa/FranciscoPhoto.jpg",
                name: "Francisco Costa e Silva",
                description: "FOOTWEAR ESPECIALIST"
            },
        ],
    ];

    const paginasIndividuais = [
        {
            path: './assets/IntegrantesEquipa/AssuncaoMoreiraPhoto.jpg',
            name: "Assunção Moreira",
            description: "PATTERN MAKER"
        },
        {
            path: "./assets/IntegrantesEquipa/TatianaCirjaPhoto.jpg",
            name: "Tatiana Cirja",
            description: "FASHION DESIGNER"
        },
        {
            path: "./assets/IntegrantesEquipa/FilipaCiprianoPhoto.jpg",
            name: "Filipa Cipriano",
            description: "GRAPHIC DESIGNER"
        },
        {
            path: './assets/IntegrantesEquipa/JoanaMagallhaesPhoto.jpg',
            name: "Joana Magalhães",
            description: "PRODUCTION AND LOGISTICS"
        },
        {
            path: "./assets/IntegrantesEquipa/HenriqueCerqueiraPhoto.jpg",
            name: "Henrique Serqueira",
            description: "PRODUCTION"
        },
        {
            path: "./assets/IntegrantesEquipa/FranciscoPhoto.jpg",
            name: "Francisco Costa e Silva",
            description: "FOOTWEAR ESPECIALIST"
        },
    ];

    return (
        <>
            <Carousel indicators={false}
                      animation='slide'
                      className="hidden lg:flex flex-col align-middle justify-center
                                 py-5 
                                 max-w-screen h-full" >
                {
                    paginas.map((item, i) =>
                        <Group key={i} group={item} />
                    )
                }
            </Carousel>
            <Carousel navButtonsAlwaysVisible 
                      indicators={false} 
                      animation='slide'
                      className="lg:hidden flex flex-col align-middle justify-center 
                                 py-5 mt-5 min-w-screen">
                {
                    paginasIndividuais.map((item, i) =>
                        <Item key={i} name={item.name} description={item.description} path={item.path} />
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
            <div className='flex flex-col lg:h-full w-full lg:w-1/3 items-center '>
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
            <div id="OurTeam"
                 className="w-screen flex flex-col px-5 py-5 lg:px-20 lg:py-10 ">
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
