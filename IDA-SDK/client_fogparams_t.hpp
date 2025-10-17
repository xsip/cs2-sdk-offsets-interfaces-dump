#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_fogparams_t {
    char vTable1664[0x8];
    Vector dirPrimary;
    Color colorPrimary;
    Color colorSecondary;
    Color colorPrimaryLerpTo;
    Color colorSecondaryLerpTo;
    float32 start;
    float32 end;
    float32 farz;
    float32 maxdensity;
    float32 exponent;
    float32 HDRColorScale;
    float32 skyboxFogFactor;
    float32 skyboxFogFactorLerpTo;
    float32 startLerpTo;
    float32 endLerpTo;
    float32 maxdensityLerpTo;
    entity2_GameTime_t lerptime;
    float32 duration;
    float32 blendtobackground;
    float32 scattering;
    float32 locallightscale;
    bool enable;
    bool blend;
    bool m_bPadding2;
    bool m_bPadding;
};
