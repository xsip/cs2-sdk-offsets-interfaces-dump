#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerGranulator {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    char pad_483[0x10];
    float32 m_flGrainLength;
    float32 m_flGrainCrossfadeAmount;
    float32 m_flStartJitter;
    float32 m_flPlaybackJitter;
    bool m_bShouldWraparound;
    char pad_488[0x7];
    char m_sourceAudio[0x8];
    char end_pad_489[0xb8];
};
