import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <div className="border-4 border-teal-400  m-4 p-4 w-3/4 grid place-items-center ">
                <h1 className="text-2xl text-slate-100 font-bold">BENVINGUT/DA</h1>
                <h3 className="text-base text-slate-100 my-6 font-semibold">Propòsit de la Web:</h3>
                <p>   La nostra web té com a principal propòsit proporcionar als usuaris una manera fàcil i intuïtiva de gestionar els seus pressupostos de projectes web. Ja sigui per a tasques de programació SEO, desenvolupament d'anuncis o creació de pàgines web, la nostra plataforma està dissenyada per simplificar el procés i ajudar-vos a prendre decisions informades.</p>
                <h3 className="text-base text-slate-100 my-6 font-semibold">Com Funciona:</h3>
                <p>
                    1.Selecciona les Opcions:
                    Utilitza els caselles de selecció per indicar quins elements vols incloure al teu pressupost. Cada opció té un preu associat.
                </p>
                <p>
                    2.Configuració Personalitzada: 
                    En cas que triïs la opció "WEB", pots personalitzar la configuració específica de la pàgina web, com ara el nombre de pàgines i idiomes.
                </p>
                <p>
                    3.Visualitza el Pressupost: 
                    El teu pressupost es calcula automàticament en base a les teves seleccions. El total es mostra en temps real.
                </p>

                <button className="border-4 border-teal-400 rounded-lg m-3 p-2 bg-teal-400 font-semibold text-slate-900">
                <Link to={'/budget'}>Go to Budget</Link>
                </button>
            </div>
        </div>

    )


}

