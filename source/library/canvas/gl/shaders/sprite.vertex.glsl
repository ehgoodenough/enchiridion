#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec2 position;
in vec2 textureCoord;

uniform vec2 resolution;

out vec2 vertexCoord;

// all shaders have a main function
void main() {
    vec2 zeroToOne = position / resolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

    // pass the texCoord to the fragment shader
    // The GPU will interpolate this value between points
    vertexCoord = textureCoord;
}
