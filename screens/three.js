import React from "react";
import { View, Text } from "react-native";
import ExpoTHREE, {Renderer} from "expo-three";
import { Scene, Mesh, MeshBasicMaterial, PerspectiveCamera, BoxBufferGeometry } from "three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";


const Three = () => {

    const onContextCreate =  async(gl)=> {

        const scene = new Scene();
        const camera = new PerspectiveCamera(
            75,
            gl.drawingBufferWidth/gl.drawingBufferHeight,
            0.1,
            1000
        )

        gl.canvas = {width:gl.drawingBufferWidth, height: gl.drawingBufferHeight}
        camera.position.z = 2

        const renderer =new Renderer({gl})
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)


            const geometry = new BoxBufferGeometry(1,1,1)
            const material = new MeshBasicMaterial({
                color: 'blue'
            })
            const cube = new Mesh(geometry, material)
            scene.add(cube)

        const render = ()=> {
            requestAnimationFrame(render)
            cube.setRotationFromAxisAngle.x += 0.01
            cube.setRotationFromAxisAngle.y += 0.01
            renderer.render(scene, camera)
            gl.endFrameEXP()
        }
    }
    return(
       <View>
         <View>
        <GLView onContextCreate={onContextCreate} 
        // style={{width: 500}}
        />
      </View>
                <Text>Hello</Text>
       </View>
            
        
    )
}

export default Three