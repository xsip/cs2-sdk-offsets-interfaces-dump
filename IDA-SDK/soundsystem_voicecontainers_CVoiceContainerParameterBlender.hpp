#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"

class soundsystem_voicecontainers_CVoiceContainerParameterBlender {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_CSoundContainerReference m_firstSound;
    soundsystem_voicecontainers_CSoundContainerReference m_secondSound;
    bool m_bEnableOcclusionBlend;
    char pad_492[0x7];
    CPiecewiseCurve m_curve1;
    CPiecewiseCurve m_curve2;
    bool m_bEnableDistanceBlend;
    char pad_493[0x7];
    CPiecewiseCurve m_curve3;
    CPiecewiseCurve m_curve4;
};
