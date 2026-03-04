#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CVoiceContainerEnvelopeAnalyzer {
    void **__vftable_0;
    bool m_bRegenerateCurveOnCompile;
    char pad_482[0x7];
    CPiecewiseCurve m_curve;
    soundsystem_voicecontainers_EMode_t m_mode;
    float32 m_fAnalysisWindowMs;
    float32 m_flThreshold;
    char end_pad_487[0x4];
};
