#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReferenceArray.hpp"

class soundsystem_voicecontainers_CVoiceContainerSelector {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_PlayBackMode_t m_mode;
    char pad_488[0x4];
    soundsystem_voicecontainers_CSoundContainerReferenceArray m_soundsToPlay;
    char m_fProbabilityWeights[0x18];
    char end_pad_489[0x20];
};
