#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"
#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"

class soundsystem_voicecontainers_CVoiceContainerLoopTrigger {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    soundsystem_voicecontainers_CSoundContainerReference m_sound;
    float32 m_flRetriggerTimeMin;
    float32 m_flRetriggerTimeMax;
    float32 m_flFadeTime;
    bool m_bCrossFade;
    char end_pad_482[0x3];
};
