import React from 'react'
import Card from './Card'
import emilianomartinez from './dibu.png';
import francoarmani from './francoarmani.png';
import marcosacuña from './marcosacuna.png';
import nahuelmolina from './nahuelmolina.png';
import nicolasotamendi from'./nicolasotamendi.png';
import germanpezzella from './germanpezzella.png';
import cristianromero from './cristianromero.png';
import rodrigodepaul from './rodrigodepaul.png';
import angeldi from './angeldimaria.png';
import leanpare   from './leanpare.png';
import guidorodriguez   from './guidorodriguez.png';
import  julial  from './julial.png';
import  joaco  from './joaco.png';
import  alego  from './alego.png';
import alexis from './alexismcalister.png'
import juanf from './juanfoyth.png'
import nicotaglia from './nicolastagliafico.png'
import nicogos   from './nicogos.png';
import lauty   from './lauty.png';
import paulo from './paulodybala.png'
import gero from './geronimo.png';
import exeq from './exequielpalacios.png'
import enzo from './enzofernandez.png'
import gonza from './gonzalomontiel.png'
import lisan from './lisandromartinez.png'
import lio   from './lio.png';
import gol from './gol.svg';
import trofeo from './Trofeo.png';
import estre from './estrellas.png'






const cards =[{id:0,
              nombre:'Copa Qatar 2022',
              estrellas:estre,
              image:trofeo},
    { id:1,
     nombre: 'Emiliano martinez',
     fechanacimiento:"02/09/1992",
     clubes:"Aston Villa F.C",
     image:emilianomartinez,
     
     }
    ,{
      id:2,
        nombre:'Franco Armani',
        fechanacimiento:"16/10/1986",
        clubes:"Carp",
        image:francoarmani
                
     },{
        id:3,
        nombre:'Geronimo Rulli',
        fechanacimiento:"20/05/1992",
        clubes:"Villa Real F.C",
        image:gero,
     },{id:4,
        nombre:'Nahuel Molina',
        fechanacimiento:"06/04/1998",
        clubes:"Atletico Madrid",
        image:nahuelmolina

     },{ id:5,
        nombre: 'Gonzalo Montiel',
        fechanacimiento:"01/01/1997",
        clubes:"Sevilla FC",
        image:gonza,
        }
       ,{
         id:6,
           nombre:'Cristian Romero',
           fechanacimiento:"27/04/1998",
           clubes:"Tottenham",
           image:cristianromero,        
        },{
           id:7,
           nombre:'German Pezzella',
           fechanacimiento:"27/06/1991",
           clubes:"Real Betis Balompie",
           image:germanpezzella,
        },{id:8,
           nombre:'Nicolas Otamendi',
           fechanacimiento:"12/02/1988",
           clubes:"S.L Benfica",
           image:nicolasotamendi,
   
        },{
         id:9,
         nombre:'Lisandro Martinez',
         fechanacimiento:"18/01/1998",
         clubes:"Manchester United",
         image:lisan,
      },{id:10,
         nombre:'Marcos Acuña',
         fechanacimiento:"28/10/1991",
         clubes:"Sevilla FC",
         image:marcosacuña,
 
      },{id:11,
         nombre:'Nicolas Tagliafico',
         fechanacimiento:"31/08/1992",
         clubes:"Olympique",
         image:nicotaglia,
 
      },{id:12,
         nombre:'Juan Foyth',
         fechanacimiento:"12/01/1998",
         clubes:"Villareal Fc",
         image:juanf,
 
      },{
       id:13,
       nombre:'Rodrigo De Paul',
       fechanacimiento:"24/05/1994",
       clubes:"Atletico de madrid",
       image:rodrigodepaul
    },{id:14,
       nombre:'Leandro Paredes',
       fechanacimiento:"29/06/1994",
       clubes:"Juventus F.C",
       image:leanpare,

    },{id:15,
       nombre:'Alexis Mac Allister',
       fechanacimiento:"24/12/1998",
       clubes:"Brighton & Hove",
       image:alexis,
       gol: gol,
      cantidad:"1"

    },{
      id:16,
      nombre:'Guido Rodriguez',
      fechanacimiento:"12/04/1994",
      clubes:"Real Betis Balompie",
      image:guidorodriguez,
   },{id:17,
      nombre:'Alejandro Gomez',
      fechanacimiento:"15/02/1988",
      clubes:"Sevilla fc",
      image:alego,
     

   },{id:18,
      nombre:'Enzo Fernandez',
      fechanacimiento:"17/01/2001",
      clubes:"S.L Benfica",
      image:enzo,
      gol: gol,
      cantidad:"1"
      
   },{
      id:19,
      nombre:'Exequiel Palacios',
      fechanacimiento:"05/10/1998",
      clubes:"Bayer",
      image:exeq
   },{
      id:20,
      nombre:'Lionel Messi',
      fechanacimiento:"24/06/1987",
      clubes:"PSG",
      image:lio,
      gol:gol,
      cantidad:"7"
   },{
      id:21,
      nombre:'Lautaro Martinez',
      fechanacimiento:"22/08/1997",
      clubes:"Inter Milan",
      image:lauty
   },{
      id:22,
      nombre:'Angel Di Maria',
      fechanacimiento:"14/02/1988 ",
      clubes:"Juventus F.C",
      image:angeldi,
      gol: gol,
      cantidad:"1"
   },{
      id:23,
      nombre:'Julian Alvarez',
      fechanacimiento:"31/01/2000",
      clubes:"Manchester City",
      image:julial,
      gol:gol,
      cantidad:"4"
   },{
      id:24,
      nombre:'Paulo Dybala',
      fechanacimiento:"sdf",
      clubes:"A.S Roma",
      image:paulo
   },{
      id:25,
      nombre:'Nicolas Gonzalez',
      fechanacimiento:"15/11/1993",
      clubes:"ACF Fiorentina",
      image:nicogos
   },
   {id:26,
      nombre:'Joaquin Correa',
      fechanacimiento:"13/08/1994",
      clubes:"Sevilla FC",
      image:joaco}
]

function Cards() {
return (
  <div className="container d-flex justify-content-center vh-100 ">
    <div className="row">
          {
            cards.map(card=> (
                <div className="col-lg-4" key={card.id}>
               <Card nombre={card.nombre}gol={card.gol} 
                     imagesource={card.image}
                     estrellas={card.estrellas}
                     cantidad={card.cantidad}
                     fechanacimiento={card.fechanacimiento} 
                     clubes={card.clubes}/>
                       
                </div>
                      ))
                        }
      </div>
       </div>
  )
  }

export default Cards