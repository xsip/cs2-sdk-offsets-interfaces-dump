#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"

class soundsystem_voicecontainers_CVoiceContainerBlender {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_CSoundContainerReference m_firstSound;
    soundsystem_voicecontainers_CSoundContainerReference m_secondSound;
    float32 m_flBlendFactor;
    char end_pad_477[0x4];
};
