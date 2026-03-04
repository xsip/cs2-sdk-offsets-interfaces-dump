#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"

class soundsystem_voicecontainers_CVoiceContainerLoopTrigger {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_CSoundContainerReference m_sound;
    float32 m_flRetriggerTimeMin;
    float32 m_flRetriggerTimeMax;
    float32 m_flFadeTime;
    bool m_bCrossFade;
    char end_pad_490[0x3];
};
