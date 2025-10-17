#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class materialsystem2_PostProcessingVignetteParameters_t {
    float32 m_flVignetteStrength;
    Vector2D m_vCenter;
    float32 m_flRadius;
    float32 m_flRoundness;
    float32 m_flFeather;
    Vector m_vColorTint;
};
