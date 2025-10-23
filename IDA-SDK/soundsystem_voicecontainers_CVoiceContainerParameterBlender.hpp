#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"

class soundsystem_voicecontainers_CVoiceContainerParameterBlender {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_CSoundContainerReference m_firstSound;
    soundsystem_voicecontainers_CSoundContainerReference m_secondSound;
    bool m_bEnableOcclusionBlend;
    char pad_483[0x7];
    CPiecewiseCurve m_curve1;
    CPiecewiseCurve m_curve2;
    bool m_bEnableDistanceBlend;
    char pad_484[0x7];
    CPiecewiseCurve m_curve3;
    CPiecewiseCurve m_curve4;
};
