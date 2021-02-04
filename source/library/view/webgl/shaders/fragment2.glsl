#version 300 es

precision highp float;

// our texture
uniform sampler2D u_image;
// uniform vec4 tintColor = vec4(0.0, 0.0, 1.0, 1.0);
uniform float tintIntensity;

// the texCoords passed in from the vertex shader.
in vec2 v_texCoord;

// we need to declare an output for the fragment shader
out vec4 outColor;

void main() {
   // Look up a color from the texture.
   vec4 textureColor = texture(u_image, v_texCoord);
   // outColor = textureColor;
   vec4 tintColor = vec4(1.0, 0.0, 0.0, 1.0);
   outColor = mix(textureColor, tintColor, tintIntensity);
}
