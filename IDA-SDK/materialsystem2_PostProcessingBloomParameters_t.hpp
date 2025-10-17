#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class materialsystem2_PostProcessingBloomParameters_t {
    materialsystem2_BloomBlendMode_t m_blendMode;
    float32 m_flBloomStrength;
    float32 m_flScreenBloomStrength;
    float32 m_flBlurBloomStrength;
    float32 m_flBloomThreshold;
    float32 m_flBloomThresholdWidth;
    float32 m_flSkyboxBloomStrength;
    float32 m_flBloomStartValue;
    float32 m_flComputeBloomStrength;
    float32 m_flComputeBloomThreshold;
    float32 m_flComputeBloomRadius;
    float32 m_flComputeBloomEffectsScale;
    float32 m_flComputeBloomLensDirtStrength;
    float32 m_flComputeBloomLensDirtBlackLevel;
    float32 m_flBlurWeight[5];
    Vector m_vBlurTint[5];
};
