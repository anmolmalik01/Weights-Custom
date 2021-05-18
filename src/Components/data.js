// data is array of array
const data = [ 
    ["Sun"      ,   28.02   ],
    ["Mercury"  ,   0.377   ],
    ["Venus"    ,   0.905   ],
    ["Earth"    ,   1       ],
    ["Mars"     ,   0.379   ],
    ["Jupiter"  ,   2.528   ],
    ["Saturn"   ,   1.065   ],
    ["Uranus"   ,   0.886   ],
    ["Neptune"  ,   1.137   ],
    ["Pluto"    ,   0.063   ],
    ["Moon"     ,   0.165   ],
    ["Titan"    ,   0.138   ],
    ["Eris"     ,   0.084   ],
    ["Triton"   ,   0.08    ],
    ["Europa"   ,   0.134   ],
    ["Phobos"   ,   0.000581],
    ["Io"       ,   0.183   ],
    ["Deimos"   ,   0.000306],
    ["Ceres"    ,   0.029   ],
    ["Ganymede" ,   0.146   ],
    ["Callisto" ,   0.126   ],
    ["Enceladus",   0.012   ],
    ["67P-CG"   ,   0.000017]
]

console.log(typeof(  data[1][1]))
//planet is formed from data which is array of objects

var planet = []
for(let i=0 ; i<data.length ; i++){
    planet.push({ "planet" :  data[i][0]}) 
} 

//exporting both arrays
export {
    data,
    planet,
}; 



