#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CVoiceContainerAnalysisBase {
    char vTable475[0x8];
    bool m_bRegenerateCurveOnCompile;
    char pad_476[0x7];
    CPiecewiseCurve m_curve;
};
