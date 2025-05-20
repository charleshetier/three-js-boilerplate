precision mediump float;

    varying vec3 vPosition; // vertex position

    void main() {
        gl_FragColor = vec4(vPosition, 0.5);
   }