#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReferenceArray.hpp"

class soundsystem_voicecontainers_CVoiceContainerSelector {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_PlayBackMode_t m_mode;
    char pad_497[0x4];
    soundsystem_voicecontainers_CSoundContainerReferenceArray m_soundsToPlay;
    char m_fProbabilityWeights[0x18];
    char end_pad_498[0x20];
};
