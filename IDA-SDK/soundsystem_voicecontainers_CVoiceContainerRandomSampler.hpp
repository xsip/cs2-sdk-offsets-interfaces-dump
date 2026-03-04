#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerRandomSampler {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    char pad_483[0x10];
    float32 m_flAmplitude;
    float32 m_flAmplitudeJitter;
    float32 m_flTimeJitter;
    float32 m_flMaxLength;
    int32_t m_nNumDelayVariations;
    char pad_494[0x4];
    char m_grainResources[0x18];
    char end_pad_495[0xf8];
};
