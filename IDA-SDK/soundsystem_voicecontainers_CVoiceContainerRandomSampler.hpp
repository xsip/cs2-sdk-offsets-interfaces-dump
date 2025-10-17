#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerRandomSampler {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    float32 m_flAmplitude;
    float32 m_flAmplitudeJitter;
    float32 m_flTimeJitter;
    float32 m_flMaxLength;
    int32_t m_nNumDelayVariations;
    char pad_485[0x4];
    char m_grainResources[0x18];
    char end_pad_486[0xf8];
};
