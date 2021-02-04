#version 300 es
precision highp float;

out vec4 outColor;
in vec2 v_texCoord;
uniform sampler2D u_image;

uniform vec4 tintColor;
uniform float tintIntensity;

uniform vec4 outlineColor;

const float offset = 1.0 / 16.0;

void main() {
    vec4 textureColor = texture(u_image, v_texCoord);
    if(textureColor.a == 1.0) {

        // TINT //
        vec4 finalColor = mix(textureColor, tintColor, tintIntensity);
        finalColor.a = textureColor.a;
        outColor = finalColor;

        return;
    }

    // OUTLINE //
    float outlineAlpha = texture(u_image, vec2(v_texCoord.x + offset, v_texCoord.y)).a +
		texture(u_image, vec2(v_texCoord.x, v_texCoord.y - offset)).a +
		texture(u_image, vec2(v_texCoord.x - offset, v_texCoord.y)).a +
		texture(u_image, vec2(v_texCoord.x, v_texCoord.y + offset)).a;
    if(outlineAlpha > 0.0) {
        outColor = outlineColor;
    }
}
