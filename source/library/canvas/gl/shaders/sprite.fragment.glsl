#version 300 es
precision highp float;

out vec4 outColor;
in vec2 vertexCoord;
uniform sampler2D u_image;

uniform vec4 tintColor;
uniform float tintIntensity;
uniform vec4 outlineColor;
uniform vec2 imageSize;

void main() {
    vec4 textureColor = texture(u_image, vertexCoord);
    if(textureColor.a == 1.0) {

        // TINT //
        vec4 finalColor = mix(textureColor, tintColor, tintIntensity);
        finalColor.a = textureColor.a;
        outColor = finalColor;

        return;
    }

    // OUTLINE //
    vec2 offset = vec2(1.0 / imageSize.x, 1.0 / imageSize.y);
    float outlineAlpha = texture(u_image, vec2(vertexCoord.x + offset.x, vertexCoord.y)).a
        + texture(u_image, vec2(vertexCoord.x, vertexCoord.y - offset.y)).a
        + texture(u_image, vec2(vertexCoord.x - offset.x, vertexCoord.y)).a
        + texture(u_image, vec2(vertexCoord.x, vertexCoord.y + offset.y)).a;
    if(outlineAlpha > 0.0) {
        outColor = outlineColor;
    }
}
