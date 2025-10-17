#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerGranulator {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    float32 m_flGrainLength;
    float32 m_flGrainCrossfadeAmount;
    float32 m_flStartJitter;
    float32 m_flPlaybackJitter;
    bool m_bShouldWraparound;
    char pad_480[0x7];
    char m_sourceAudio[0x8];
    char end_pad_481[0xb8];
};
