#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

const float PI = 3.14159265358979323846264;
const float TAU = PI * 2.0;
const vec2 imageSize = vec2(16.0, 16.0);
const float thickness = 1.0;
const vec2 displacement = vec2(1.0 / (imageSize.x / thickness), 1.0 / (imageSize.y / thickness));
const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 1.0);
const vec4 filterClamp = vec4(0.0, 0.0, 0.0, 0.0);
const float samples = 50.0;

void main() {
   vec4 textureColor = texture(u_image, v_texCoord);
   float outlineAlpha = 0.0;
   for(float angle = 0.0; angle <= TAU; angle += TAU / samples) {
       vec2 displacedPosition;
       displacedPosition.x = v_texCoord.x + displacement.x * cos(angle);
       displacedPosition.y = v_texCoord.y + displacement.y * sin(angle);
       vec4 displacedColor = texture(u_image, displacedPosition);
       outlineAlpha = max(outlineAlpha, displacedColor.a);
   }
   if(textureColor.a < 1.0 && outlineAlpha > 0.0) {
       outColor = vec4(0.0, 0.0, 0.0, 1.0);
   } else {
       outColor = textureColor;
   }

}
