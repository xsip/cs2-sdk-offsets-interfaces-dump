#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "materialsystem2_PostProcessingTonemapParameters_t.hpp"
#include "materialsystem2_PostProcessingBloomParameters_t.hpp"
#include "materialsystem2_PostProcessingVignetteParameters_t.hpp"
#include "materialsystem2_PostProcessingLocalContrastParameters_t.hpp"
#include "materialsystem2_PostProcessingFogScatteringParameters_t.hpp"

class materialsystem2_PostProcessingResource_t {
    bool m_bHasTonemapParams;
    char pad_4186[0x3];
    materialsystem2_PostProcessingTonemapParameters_t m_toneMapParams;
    bool m_bHasBloomParams;
    char pad_4187[0x3];
    materialsystem2_PostProcessingBloomParameters_t m_bloomParams;
    bool m_bHasVignetteParams;
    char pad_4188[0x3];
    materialsystem2_PostProcessingVignetteParameters_t m_vignetteParams;
    bool m_bHasLocalContrastParams;
    char pad_4189[0x3];
    materialsystem2_PostProcessingLocalContrastParameters_t m_localConstrastParams;
    int32_t m_nColorCorrectionVolumeDim;
    CUtlBinaryBlock m_colorCorrectionVolumeData;
    bool m_bHasColorCorrection;
    bool m_bHasFogScatteringParams;
    char pad_4190[0x2];
    materialsystem2_PostProcessingFogScatteringParameters_t m_fogScatteringParams;
};
