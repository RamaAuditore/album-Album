import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { loadFull } from "tsparticles";
  

const ParticlesComponent = () =>{
    const options = useMemo(()=>{
      return{
        particles:{
            "color":{"value":["#FFFFFF","#FFD700","B2FFFF"]},
            move:{direction:"bottom",
                  enable:true},
                  outModes:{"default":"out"},
                  size:true,
                  speed:{
                    "min":1,
                    "max":3
                  },number:{
                    "value":500,
                    density:{
                        enable:true,
                        "area":800
                    }
                  },"rotate": {
                    "value": {
                      "min": 0,
                      "max": 360
                    },
                    "direction": "random",
                    "move": true,
                    "animation": {
                      "enable": true,
                      "speed": 60
                    }
                  },"tilt":{
                    "direction": "random",
                    "enable":true,
                     "move":true,
                     "value":{
                        "min":0,
                        "max":360
                     },"animation":{
                        "enable":true,
                        "speed":60
                     }
                  },"shape":{
                    "type":["circle","square"],"options":{}
                  },"size":{"value":{"min":4,"max":6}},"roll": {
                    "darken": {
                      "enable": true,
                      "value": 30
                    },
                    "enlighten": {
                      "enable": true,
                      "value": 30
                    },
                    "enable": true,
                    "speed": {
                      "min": 15,
                      "max": 25
                    }
                  },"wobble": {
                    "distance": 30,
                    "enable": true,
                    "move": true,
                    "speed": {
                      "min": -15,
                      "max": 15
                    }
                  }}

        
      
      };
    },[]);
  
   const particlesInit = useCallback((engine)=>{
      //loadSlim(engine);
      loadFull(engine);
   })
  
  
      return <Particles init={particlesInit} options={options}/>
  }


export default ParticlesComponent


