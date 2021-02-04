#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;
out vec4 outColor;

const float offset = 1.0 / 16.0;

void main() {
    vec4 textureColor = texture(u_image, v_texCoord);
    float outlineAlpha = texture(u_image, vec2(v_texCoord.x + offset, v_texCoord.y)).a +
		texture(u_image, vec2(v_texCoord.x, v_texCoord.y - offset)).a +
		texture(u_image, vec2(v_texCoord.x - offset, v_texCoord.y)).a +
		texture(u_image, vec2(v_texCoord.x, v_texCoord.y + offset)).a;
    if(textureColor.a < 1.0 && outlineAlpha > 0.0) {
        outColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
        outColor = textureColor;
    }
}
