#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CVoiceContainerEnvelopeAnalyzer {
    char vTable475[0x8];
    bool m_bRegenerateCurveOnCompile;
    char pad_476[0x7];
    CPiecewiseCurve m_curve;
    soundsystem_voicecontainers_EMode_t m_mode;
    float32 m_fAnalysisWindowMs;
    float32 m_flThreshold;
    char end_pad_479[0x4];
};
